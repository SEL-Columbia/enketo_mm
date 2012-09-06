(function() {

  window.Form = function(formSelector, dataStr) {
    /*
      Function: init
      
      Initializes the Form instance (XML data and HTML form).
    */

    var $form, $formClone, DataXML, FormHTML, data, form;
    DataXML = function(dataStr) {
      var $data, Nodeset, that;
      Nodeset = function(selector, index, filter) {
        this.selector = (typeof selector !== "undefined" && selector ? selector : "*");
        filter = (typeof filter !== "undefined" && filter !== null ? filter : {});
        this.filter = filter;
        this.filter.noTemplate = (typeof filter.noTemplate !== "undefined" ? filter.noTemplate : true);
        this.filter.onlyLeaf = (typeof filter.onlyLeaf !== "undefined" ? filter.onlyLeaf : false);
        this.filter.onlyTemplate = (typeof filter.onlyTemplate !== "undefined" ? filter.onlyTemplate : false);
        this.filter.noEmpty = (typeof filter.noEmpty !== "undefined" ? filter.noEmpty : false);
        return this.index = index;
      };
      $data = void 0;
      that = this;
      dataStr = dataStr.replace(/<[\/]?instance(>|\s+[^>]*>)/g, "");
      this.xml = $.parseXML(dataStr);
      $data = $(this.xml);
      this.$ = $data;
      XPathJS.bindDomLevel3XPath();
      this.node = function(selector, index, filter) {
        return new Nodeset(selector, index, filter);
      };
      /*
          Function: get
          
          Privileged method to find data nodes filtered by a jQuery or XPath selector and additional filter properties
          Without parameters it returns a collection of all data nodes excluding template nodes and their children. Therefore, most
          queries will not require filter properties. This function handles all (?) data queries in the application.
          
          Parameters:
          
          selector - [Optional] String containing a JQuery selector or an XPath
          filter - [Optional] Object (filter) with the following optional boolean properties: "noTemplate"(default: false), "onlyTemplate", "noEmpty", "onlyEmpty".
          
          Notes:
          
          onlyTemplate = true - will negate any value for "noTemplate"
          noEmpty = true - returns only leaf nodes and therefore makes the "onlyLeaf" property obsolete
          noTemplate = false - returns all data nodes if no other properties or the selector are set.
          
          Returns:
          
          Data nodes that match the selector and filter.
          
          See Also:
          
          <xfind>
      */

      Nodeset.prototype.get = function() {
        var $nodes, p, val;
        p = void 0;
        $nodes = void 0;
        val = void 0;
        if (this.filter.onlyTemplate === true) {
          $nodes = $data.xfind(this.selector).filter("[template]");
        } else if (this.filter.noTemplate === true) {
          $nodes = $data.xfind(this.selector).not("[template], [template] *");
        } else {
          $nodes = $data.xfind(this.selector);
        }
        if (this.filter.noEmpty === true) {
          $nodes = $nodes.filter(function() {
            val = $(this).text();
            return $(this).children().length === 0 && val.trim().length > 0;
          });
        } else if (this.filter.onlyLeaf === true) {
          $nodes = $nodes.filter(function() {
            return $(this).children().length === 0;
          });
        }
        $nodes = (typeof this.index !== "undefined" && this.index !== null ? $nodes.eq(this.index) : $nodes);
        return $nodes;
      };
      Nodeset.prototype.setVal = function(newVal, expr, xmlDataType) {
        var curVal, success, target;
        target = void 0;
        curVal = void 0;
        success = void 0;
        curVal = this.getVal().join(" ");
        if (typeof newVal !== "undefined") {
          newVal = ($.isArray(newVal) ? newVal.join(" ") : newVal);
        } else {
          newVal = "";
        }
        newVal = this.convert(newVal, xmlDataType);
        target = this.get();
        if (target.length === 1 && newVal.toString().trim() !== curVal.toString().trim()) {
          target.text(newVal);
          success = this.validate(expr, xmlDataType);
          $form.trigger("dataupdate", target.prop("nodeName"));
          return success;
        }
        if (target.length > 1) {
          console.error("nodeset.setVal expected nodeset with one node, but received multiple");
          return null;
        }
        if (target.length === 0) {
          console.error("Data node: " + this.selector + " with null-based index: " + this.index + " not found!");
          return null;
        }
        return null;
      };
      Nodeset.prototype.getVal = function() {
        var vals;
        vals = [];
        this.get().each(function() {
          return vals.push($(this).text());
        });
        return vals;
      };
      Nodeset.prototype.clone = function($precedingTargetNode) {
        var $dataNode, allClonedNodeNames;
        $dataNode = void 0;
        allClonedNodeNames = void 0;
        $dataNode = this.get();
        $precedingTargetNode = $precedingTargetNode || $dataNode;
        if ($dataNode.length === 1 && $precedingTargetNode.length === 1) {
          $dataNode.clone().insertAfter($precedingTargetNode).find("*").andSelf().removeAttr("template");
          allClonedNodeNames = [$dataNode.prop("nodeName")];
          $dataNode.find("*").each(function() {
            return allClonedNodeNames.push($(this).prop("nodeName"));
          });
          return $form.trigger("dataupdate", allClonedNodeNames.join());
        } else {
          return console.error("node.clone() function did not receive origin and target nodes");
        }
      };
      Nodeset.prototype.remove = function() {
        var dataNode;
        dataNode = this.get();
        if (dataNode.length > 0) {
          dataNode.remove();
          return $form.trigger("dataupdate", dataNode.prop("nodeName"));
        } else {
          return console.error("could not find node " + this.selector + " with index " + this.index + "to remove ");
        }
      };
      Nodeset.prototype.convert = function(x, xmlDataType) {
        if (x.toString() === "") {
          return x;
        }
        if (typeof xmlDataType !== "undefined" && xmlDataType !== null && typeof this.types[xmlDataType.toLowerCase()] !== "undefined" && typeof this.types[xmlDataType.toLowerCase()].convert !== "undefined") {
          return this.types[xmlDataType.toLowerCase()].convert(x);
        }
        return x;
      };
      Nodeset.prototype.validate = function(expr, xmlDataType) {
        var exprValid, typeValid, value;
        typeValid = void 0;
        exprValid = void 0;
        value = this.getVal();
        if (value.toString() === "") {
          return true;
        }
        if (typeof xmlDataType === "undefined" || xmlDataType === null || typeof this.types[xmlDataType.toLowerCase()] === "undefined") {
          console.error("data type " + xmlDataType + " set to string");
          xmlDataType = "string";
        }
        typeValid = this.types[xmlDataType.toLowerCase()].validate(value);
        exprValid = (typeof expr !== "undefined" && expr !== null && expr.length > 0 ? that.evaluate(expr, "boolean", this.selector, this.index) : true);
        return typeValid && exprValid;
      };
      return Nodeset.prototype.types = {
        string: {
          validate: function(x) {
            return true;
          }
        },
        select: {
          validate: function(x) {
            return true;
          }
        },
        select1: {
          validate: function(x) {
            return true;
          }
        },
        decimal: {
          validate: function(x) {
            if (!isNaN(x - 0) && x !== null) {
              return true;
            } else {
              return false;
            }
          }
        },
        int: {
          validate: function(x) {
            if (!isNaN(x - 0) && x !== null && Math.round(x) === x) {
              return true;
            } else {
              return false;
            }
          }
        },
        date: {
          validate: function(x) {
            return new Date(x.toString()).toString() !== "Invalid Date";
          },
          convert: function(x) {
            var datetime;
            datetime = new Date(x);
            datetime.setUTCHours(0, 0, 0, 0);
            return new Date(datetime).toUTCString();
          }
        },
        datetime: {
          validate: function(x) {
            return new Date(x).toString() !== "Invalid Date";
          }
        },
        time: {
          validate: function(x) {
            return new Date("2012-01-01 " + x).toString() !== "Invalid Date";
          },
          convert: function(x) {
            var datetime;
            datetime = new Date("2012-01-01 " + x);
            return datetime.getHours().toString().pad(2) + ":" + datetime.getMinutes().toString().pad(2) + ":" + datetime.getSeconds().toString().pad(2);
          }
        },
        barcode: {
          validate: function(x) {
            return true;
          }
        },
        geopoint: {
          validate: function(x) {
            return true;
          }
        },
        binary: {
          validate: function(x) {
            return true;
          }
        }
      };
    };
    FormHTML = function(selector) {
      var $form;
      return $form = $(selector);
    };
    "use strict";

    data = void 0;
    form = void 0;
    $form = void 0;
    $formClone = void 0;
    this.ex = function(expr, type, selector, index) {
      return data.evaluate(expr, type, selector, index);
    };
    this.sfv = function() {
      return form.setAllVals();
    };
    this.getDataO = function() {
      return data.get();
    };
    this.data = function(dataStr) {
      return new DataXML(dataStr);
    };
    this.form = function(selector) {
      return new FormHTML(selector);
    };
    this.getDataXML = function() {
      return data.getXML();
    };
    this.validateAll = function() {
      return form.validateAll();
    };
    this.init = function() {
      $formClone = $(formSelector).clone().appendTo("<original></original>");
      window.data = new DataXML(dataStr);
      window.data.init();
      window.form = new FormHTML(formSelector);
      window.form.init();
    };
    this.getDataStr = function(incTempl, incNs) {
      return data.getStr(incTempl, incNs);
    };
    this.getRecordName = function() {
      return form.recordName.get();
    };
    this.setRecordName = function(name) {
      return form.recordName.set(name);
    };
    this.getRecordStatus = function() {
      return form.recordStatus.get();
    };
    this.setRecordStatus = function(markedFinal) {
      return form.recordStatus.set(markedFinal);
    };
    this.setEditStatus = function(status) {
      return form.editStatus.set(status);
    };
    this.getEditStatus = function() {
      return form.editStatus.get();
    };
    this.reset = function() {
      $("#form-languages").remove();
      return $form.replaceWith($formClone);
    };
    this.validateForm = function() {
      return form.validateAll();
    };
    this.isValid = function() {
      return form.isValid();
    };
    DataXML.prototype.init = function() {
      var $root, val;
      $root = void 0;
      val = void 0;
      this.node(null, null, {
        noEmpty: true,
        noTemplate: false
      }).get().each(function() {
        val = $(this).text();
        return $(this).text(val.trim());
      });
      $root = this.node(":first", 0).get();
      this.namespace = $root.attr("xmlns");
      $root.removeAttr("xmlns");
      this.cloneAllTemplates();
      return void 0;
    };
    DataXML.prototype.cloneTemplate = function(selector, index) {
      var $insertAfterNode, name, template;
      $insertAfterNode = void 0;
      name = void 0;
      template = this.node(selector, 0, {
        onlyTemplate: true
      });
      template = (template.get().length === 0 ? this.node(selector, 0) : template);
      name = template.get().prop("nodeName");
      $insertAfterNode = this.node(selector, index).get();
      if (template.get().length === 1 && $insertAfterNode.length === 1 && $insertAfterNode.next().prop("nodeName") !== name) {
        return template.clone($insertAfterNode);
      } else {
        if ($insertAfterNode.next().prop("nodeName") !== name) {
          return console.error("Could not find template node and/or node to insert the clone after");
        }
      }
    };
    DataXML.prototype.cloneAllTemplates = function(startNode) {
      var _this;
      _this = this;
      if (typeof startNode === "undefined" || startNode.length === 0) {
        startNode = this.$.find(":first");
      }
      startNode.children("[template]").each(function() {
        if (typeof $(this).parent().attr("template") === "undefined" && $(this).siblings($(this).prop("nodeName")).not("[template]").length === 0) {
          return $(this).clone().insertAfter($(this)).find("*").andSelf().removeAttr("template");
        }
      });
      startNode.children().not("[template]").each(function() {
        return _this.cloneAllTemplates($(this));
      });
    };
    DataXML.prototype.get = function() {
      return this.$ || null;
    };
    DataXML.prototype.getXML = function() {
      return this.xml || null;
    };
    DataXML.prototype.getStr = function(incTempl, incNs) {
      var $dataClone;
      $dataClone = void 0;
      dataStr = void 0;
      incTempl = (typeof incTempl !== "undefined" ? incTempl : false);
      incNs = (typeof incNs !== "undefined" ? incNs : true);
      $dataClone = $("<root></root");
      this.$.find(":first").clone().appendTo($dataClone);
      if (incTempl === false) {
        $dataClone.find("[template]").remove();
      }
      if (incNs === true && typeof this.namespace !== "undefined" && this.namespace.length > 0) {
        $dataClone.children().eq(0).attr("xmlns", this.namespace);
      }
      dataStr = (new XMLSerializer()).serializeToString($dataClone.children().eq(0)[0]);
      dataStr = dataStr.replace(/xmlns\=\"[A-z0-9\:\/\.\-\%\_\?&amp;]*\"/g, " ");
      dataStr = dataStr.replace(/\t/g, "");
      return dataStr;
    };
    DataXML.prototype.makeBugCompliant = function(expr, $repParents) {
      var bcExpr, i, repIndex, repSelector;
      i = void 0;
      repSelector = void 0;
      repIndex = void 0;
      bcExpr = expr;
      i = 0;
      while (i < $repParents.length) {
        repSelector = $repParents.eq(i).attr("name");
        repIndex = $repParents.eq(i).siblings("[name=\"" + repSelector + "\"]").andSelf().index($repParents.eq(i));
        bcExpr = bcExpr.replace(repSelector, repSelector + "[" + (repIndex + 1) + "]");
        i++;
      }
      return bcExpr;
    };
    DataXML.prototype.evaluate = function(expr, resTypeStr, selector, index) {
      var $repParents, context, dataCleanClone, resTypeNum, result, resultTypes;
      context = void 0;
      dataCleanClone = void 0;
      resTypeNum = void 0;
      resultTypes = void 0;
      result = void 0;
      $repParents = void 0;
      resTypeStr = resTypeStr || "any";
      index = index || 0;
      dataCleanClone = new DataXML(this.getStr(false, false));
      if (typeof selector !== "undefined" || selector !== null) {
        context = dataCleanClone.node(selector, index, {}).get()[0];
        if ($form.find("[name=\"" + selector + "\"]").parents(".jr-repeat").length > 0) {
          $repParents = $form.find("[name=\"" + selector + "\"]").eq(index).parents(".jr-repeat");
          expr = this.makeBugCompliant(expr, $repParents);
        }
      } else {
        context = dataCleanClone.getXML();
      }
      resultTypes = {
        0: ["any", "ANY_TYPE"],
        1: ["number", "NUMBER_TYPE", "numberValue"],
        2: ["string", "STRING_TYPE", "stringValue"],
        3: ["boolean", "BOOLEAN_TYPE", "booleanValue"],
        7: ["nodes", "ORDERED_NODE_SNAPSHOT_TYPE"],
        9: ["node", "FIRST_ORDERED_NODE_TYPE"]
      };
      for (resTypeNum in resultTypes) {
        resTypeNum = Number(resTypeNum);
        if (resultTypes[resTypeNum][0] === resTypeStr) {
          break;
        } else {
          resTypeNum = 0;
        }
      }
      expr = expr.replace(/&lt;/g, "<");
      expr = expr.replace(/&gt;/g, ">");
      expr = expr.replace(/&quot;/g, "\"");
      try {
        result = document.evaluate(expr, context, null, resTypeNum, null);
        if (resTypeNum === 0) {
          for (resTypeNum in resultTypes) {
            resTypeNum = Number(resTypeNum);
            if (resTypeNum === Number(result.resultType)) {
              result = (resTypeNum > 0 && resTypeNum < 4 ? result[resultTypes[resTypeNum][2]] : result);
              console.debug("evaluated " + expr + " to: " + result);
              return result;
            }
          }
          console.error("Expression: " + expr + " did not return any boolean, string or number value as expected");
        }
        console.debug("evaluated " + expr + " to: " + result[resultTypes[resTypeNum][2]]);
        return result[resultTypes[resTypeNum][2]];
      } catch (e) {
        return console.error("Error occurred trying to evaluate: " + expr + ", message: " + e.message);
      }
    };
    FormHTML.prototype.init = function() {
      var icons, name;
      icons = void 0;
      name = void 0;
      this.checkForErrors();
      if (typeof data === "undefined" || (!(data instanceof DataXML))) {
        return console.error("variable data needs to be defined as instance of DataXML");
      }
      icons = "<div class=\"question-icons\"><span class=\"required\"></span><span class=\"hint\"></span></div>";
      $form.find("label>input[type=\"checkbox\"], label>input[type=\"radio\"]").parent().parent("fieldset").prepend(icons);
      $form.parent().find("label>select, :not(#jr-preload-items, #jr-calculated-items)>label>input").not("[type=\"checkbox\"], [type=\"radio\"]").parent().prepend(icons);
      $form.find("label>input[type=\"checkbox\"][required], label>input[type=\"radio\"][required]").parent().parent("fieldset").find(".question-icons .required").addClass("ui-icon ui-icon-notice");
      $form.parent().find("label>select[required], :not(#jr-preload-items, #jr-calculated-items)>label>input[required]").not("[type=\"checkbox\"], [type=\"radio\"]").parent().find(".question-icons .required").addClass("ui-icon ui-icon-notice");
      $form.find("input[type=\"radio\"]").each(function() {
        name = $(this).attr("name");
        return $(this).attr("data-name", name);
      });
      $form.find("h2").first().append("<span/>");
      this.repeat.init();
      this.setAllVals();
      this.beautify();
      this.widgets.init();
      this.branch.init();
      this.calcUpdate();
      this.outputUpdate();
      this.setEventHandlers();
      this.preloads.init();
      this.setLangs();
      return this.editStatus.set(false);
    };
    FormHTML.prototype.checkForErrors = function() {
      var $stats, i, paths, total, _results;
      i = void 0;
      paths = [];
      total = {};
      $stats = $form.find("#stats");
      total.jrItem = parseInt($stats.find("[id=\"jrItem\"]").text(), 10);
      total.jrInput = parseInt($stats.find("[id=\"jrInput\"]").text(), 10);
      total.jrUpload = parseInt($stats.find("[id=\"jrUpload\"]").text(), 10);
      total.jrTrigger = parseInt($stats.find("[id=\"jrTrigger\"]").text(), 10);
      total.jrConstraint = parseInt($stats.find("[id=\"jrConstraint\"]").text(), 10);
      total.jrRelevant = parseInt($stats.find("[id=\"jrRelevant\"]").text(), 10);
      total.jrCalculate = parseInt($stats.find("[id=\"jrCalculate\"]").text(), 10);
      total.jrPreload = parseInt($stats.find("[id=\"jrPreload\"]").text(), 10);
      /*
          @type {number}
      */

      total.hRadio = $form.find("input[type=\"radio\"]").length;
      total.hCheck = $form.find("input[type=\"checkbox\"]").length;
      total.hSelect = $form.find("select").length;
      total.hOption = $form.find("option[value!=\"\"]").length;
      total.hInputNotRadioCheck = $form.find("input:not([type=\"radio\"],[type=\"checkbox\"])").length;
      total.hTrigger = $form.find(".trigger").length;
      total.hRelevantNotRadioCheck = $form.find("[data-relevant]:not([type=\"radio\"],[type=\"checkbox\"])").length;
      total.hRelevantRadioCheck = $form.find("input[data-relevant][type=\"radio\"],input[data-relevant][type=\"checkbox\"]").parent().parent("fieldset").length;
      total.hConstraintNotRadioCheck = $form.find("[data-constraint]:not([type=\"radio\"],[type=\"checkbox\"])").length;
      total.hConstraintRadioCheck = $form.find("input[data-constraint][type=\"radio\"],input[data-constraint][type=\"checkbox\"]").parent().parent("fieldset").length;
      total.hCalculate = $form.find("[data-calculate]").length;
      total.hPreload = $form.find("#jr-preload-items input").length;
      if (total.jrItem !== (total.hOption + total.hRadio + total.hCheck)) {
        console.error(" total select-type filter differs between XML form and HTML form");
      }
      if ((total.jrInput + total.jrUpload) !== (total.hInputNotRadioCheck - total.hCalculate - total.hPreload)) {
        console.error(" total amount of input/upload fields differs between XML form and HTML form");
      }
      if (total.jrTrigger !== total.hTrigger) {
        console.error(" total triggers differs between XML form and HTML form");
      }
      if (total.jrRelevant !== (total.hRelevantNotRadioCheck + total.hRelevantRadioCheck)) {
        console.error(" total amount of branches differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form)");
      }
      if (total.jrConstraint !== (total.hConstraintNotRadioCheck + total.hConstraintRadioCheck)) {
        console.error(" total amount of constraints differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form)." + " Note that constraints on &lt;trigger&gt; elements are ignored in the transformation and could cause this error too.");
      }
      if (total.jrCalculate !== total.hCalculate) {
        console.error(" total amount of calculated items differs between XML form and HTML formprel");
      }
      if (total.jrPreload !== total.hPreload) {
        console.error(" total amount of preload items differs between XML form and HTML form");
      }
      $form.find("[name]").each(function() {
        if ($.inArray($(this).attr("name"), paths)) {
          return paths.push($(this).attr("name"));
        }
      });
      i = 0;
      _results = [];
      while (i < paths.length) {
        if (data.node(paths[i]).get().length < 1) {
          console.error("Found name attribute: " + paths[i] + " that does not have a corresponding data node. Transformation error or XML form error (relative nodesets perhaps?");
        }
        _results.push(i++);
      }
      return _results;
    };
    FormHTML.prototype.input = {
      getWrapNodes: function($inputNodes) {
        var type;
        type = this.getInputType($inputNodes.eq(0));
        if (type === "radio" || type === "checkbox") {
          return $inputNodes.parent("label").parent("fieldset");
        } else {
          if (type === "fieldset") {
            return $inputNodes;
          } else {
            return $inputNodes.parent("label");
          }
        }
      },
      getProps: function($node) {
        if ($node.length !== 1) {
          return console.error("getProps(): no input node provided or multiple");
        }
        return {
          path: this.getName($node),
          ind: this.getIndex($node),
          inputType: this.getInputType($node),
          xmlType: this.getXmlType($node),
          constraint: $node.attr("data-constraint"),
          relevant: $node.attr("data-relevant"),
          val: this.getVal($node),
          required: ($node.attr("required") !== undefined ? true : false),
          enabled: this.isEnabled($node),
          multiple: this.isMultiple($node)
        };
      },
      getInputType: function($node) {
        if ($node.length !== 1) {
          return "";
        }
        if ($node.prop("nodeName").toLowerCase() === "input") {
          if ($node.attr("type").length > 0) {
            return $node.attr("type").toLowerCase();
          } else {
            return console.error("<input> node has no type");
          }
        } else if ($node.prop("nodeName").toLowerCase() === "select") {
          return "select";
        } else if ($node.prop("nodeName").toLowerCase() === "fieldset") {
          return "fieldset";
        } else {
          return console.error("unexpected input node type provided");
        }
      },
      getXmlType: function($node) {
        if ($node.length !== 1) {
          return console.error("getXMLType(): no input node provided or multiple");
        }
        return $node.attr("data-type-xml");
      },
      getName: function($node) {
        if ($node.length !== 1) {
          return console.error("getName(): no input node provided or multiple");
        }
        if (this.getInputType($node) === "radio") {
          return $node.attr("data-name");
        }
        if ($node.attr("name").length > 0) {
          return $node.attr("name");
        } else {
          return console.error("input node has no name");
        }
      },
      getIndex: function($node) {
        var $wrapNode, $wrapNodesSameName, inputType, name;
        inputType = void 0;
        name = void 0;
        $wrapNode = void 0;
        $wrapNodesSameName = void 0;
        if ($node.length !== 1) {
          return console.error("getIndex(): no input node provided or multiple");
        }
        inputType = this.getInputType($node);
        name = this.getName($node);
        $wrapNode = this.getWrapNodes($node);
        if (inputType === "radio" && name !== $node.attr("name")) {
          $wrapNodesSameName = this.getWrapNodes($form.find("[data-name=\"" + name + "\"]"));
        } else {
          $wrapNodesSameName = this.getWrapNodes($form.find("[name=\"" + name + "\"]"));
        }
        return $wrapNodesSameName.index($wrapNode);
      },
      isMultiple: function($node) {
        if (this.getInputType($node) === "checkbox" || $node.attr("multiple") !== undefined) {
          return true;
        } else {
          return false;
        }
      },
      isEnabled: function($node) {
        if ($node.attr("disabled") !== undefined || $node.parents("fieldset:disabled").length !== 0) {
          return false;
        } else {
          return true;
        }
      },
      getVal: function($node) {
        var inputType, name, values;
        inputType = void 0;
        values = [];
        name = void 0;
        if ($node.length !== 1) {
          return console.error("getVal(): no inputNode provided or multiple");
        }
        inputType = this.getInputType($node);
        name = this.getName($node);
        if (inputType === "radio") {
          return this.getWrapNodes($node).find("input:checked").val() || "";
        }
        if (inputType === "checkbox") {
          this.getWrapNodes($node).find("input[name=\"" + name + "\"]:checked").each(function() {
            return values.push($(this).val());
          });
          return values;
        }
        return $node.val() || "";
      },
      setVal: function(name, index, value) {
        var $inputNodes;
        $inputNodes = void 0;
        index = index || 0;
        if (this.getInputType($form.find("[data-name=\"" + name + "\"]").eq(0)) === "radio") {
          return this.getWrapNodes($form.find("[data-name=\"" + name + "\"]")).eq(index).find("input[value=\"" + value + "\"]").attr("checked", true);
        } else {
          $inputNodes = this.getWrapNodes($form.find("[name=\"" + name + "\"]")).eq(index).find("input, select, textarea");
        }
        if (this.isMultiple($inputNodes.eq(0)) === true) {
          value = value.split(" ");
        }
        return $inputNodes.val(value);
      }
    };
    /*
      Function: setAllVals
      
      Uses current content of $data to set all the values in the form
      
      Notes:
      
      Since not all data nodes with a value have a corresponding input element, it could be considered to turn this
      around and cycle through the HTML form elements and check for each form element whether data is available.
      
      Returns:
      
      -
    */

    FormHTML.prototype.setAllVals = function() {
      var index, name, that, value;
      index = void 0;
      name = void 0;
      value = void 0;
      that = this;
      data.node(null, null, {
        noEmpty: true
      }).get().each(function() {
        value = $(this).text();
        index = data.node($(this).prop("nodeName")).get().index($(this));
        name = that.generateName($(this));
        return that.input.setVal(name, index, value);
      });
    };
    FormHTML.prototype.setLangs = function() {
      var defaultLang, lang, newLabel, that, value;
      lang = void 0;
      value = void 0;
      newLabel = void 0;
      that = this;
      defaultLang = $form.find("#form-languages").attr("data-default-lang");
      $("#form-languages").detach().insertBefore($("form.jr").parent());
      if (!defaultLang || defaultLang === "") {
        defaultLang = $("#form-languages a:eq(0)").attr("lang");
      }
      console.debug("default language is: " + defaultLang);
      if ($("#form-languages a").length < 2) {
        $form.find("[lang]").addClass("active");
        $form.find(".jr-form-short.active").each(function() {
          if ($(this).siblings(".jr-form-long.active").length > 0) {
            return $(this).removeClass("active");
          }
        });
        this.setHints();
        return;
      }
      $("#form-languages a").click(function(event) {
        event.preventDefault();
        lang = $(this).attr("lang");
        $("#form-languages a").removeClass("active");
        $(this).addClass("active");
        $form.find("[lang]").removeClass("active").filter("[lang=\"" + lang + "\"], [lang=\"\"]").addClass("active");
        $form.find(".jr-form-short.active").each(function() {
          if ($(this).siblings(".jr-form-long.active").length > 0) {
            return $(this).removeClass("active");
          }
        });
        $form.find("select>option").not("[value=\"\"]").each(function() {
          value = $(this).attr("value");
          newLabel = $(this).parent("select").next(".jr-option-translations").children(".active[data-option-value=\"" + value + "\"]").text().trim();
          newLabel = (typeof newLabel !== "undefined" && newLabel.length > 0 ? newLabel : "[MISSING TRANSLATION]");
          return $(this).text(newLabel);
        });
        $form.find("legend span.active:not(.jr-hint, .jr-constraint-msg), label span.active:not(.jr-hint, .jr-constraint-msg)").each(function() {
          if ($(this).text().trim().length === 0) {
            return $(this).text("[MISSING TRANSLATION]");
          }
        });
        that.setHints();
        return $form.trigger("changelanguage");
      });
      return $("#form-languages a[lang=\"" + defaultLang + "\"]").click();
    };
    FormHTML.prototype.setHints = function() {
      var $wrapNode, hint;
      hint = void 0;
      $wrapNode = void 0;
      $form.find("*>.jr-hint").parent().each(function() {
        if ($(this).prop("nodeName").toLowerCase() !== "label" && $(this).prop("nodeName").toLowerCase() !== "fieldset") {
          $wrapNode = $(this).parent("fieldset");
        } else {
          $wrapNode = $(this);
        }
        hint = ($wrapNode.length > 0 ? $(this).find(".jr-hint.active").text().trim() : $(this).find("span.jr-hint").text().trim());
        if (hint.length > 0) {
          return $wrapNode.find(".question-icons .hint").attr("title", hint).addClass("ui-icon ui-icon-help");
        } else {
          return $wrapNode.find(".question-icons .hint").removeAttr("title").removeClass("ui-icon ui-icon-help");
        }
      });
      return $form.tooltip();
    };
    FormHTML.prototype.editStatus = {
      set: function(status) {
        $form.attr("data-edited", Boolean(status));
        return $form.trigger("edit", status);
      },
      get: function() {
        if ($form.attr("data-edited") === "true") {
          return true;
        } else {
          return false;
        }
      }
    };
    FormHTML.prototype.recordName = {
      set: function(key) {
        $form.attr("data-stored-with-key", key);
        return $form.find("h2 span").text(key);
      },
      get: function() {
        return $form.attr("data-stored-with-key") || null;
      },
      reset: function() {
        return $form.removeAttr("data-stored-with-key");
      }
    };
    FormHTML.prototype.recordStatus = {
      set: function(markedFinal) {
        return $form.attr("data-stored-final", markedFinal.toString());
      },
      get: function() {
        if ($form.attr("data-stored-final") === "true") {
          return true;
        } else {
          return false;
        }
      },
      reset: function() {
        return $form.removeAttr("data-stored-final");
      }
    };
    FormHTML.prototype.branch = {
      init: function() {
        $form.on("click", ".jr-branch", function(event) {
          var $that;
          $that = $(this);
          if (!$(this).hasClass("busy")) {
            if ($(this).hasClass("show")) {
              return $(this).addClass("busy").removeClass("show").next().hide("blind", {}, 600, function() {
                return $that.removeClass("busy");
              });
            } else {
              return $(this).addClass("busy show").next().show("blind", {}, 600, function() {
                $that.removeClass("busy");
                return $that.next().fixLegends();
              });
            }
          }
        });
        return this.update();
      },
      update: function(changedNodeNames) {
        var alreadyCovered, branchNode, cleverSelector, i, namesArr, p, result, that;
        i = void 0;
        p = void 0;
        branchNode = void 0;
        result = void 0;
        namesArr = void 0;
        cleverSelector = void 0;
        alreadyCovered = {};
        that = this;
        namesArr = (typeof changedNodeNames !== "undefined" ? changedNodeNames.split(",") : []);
        cleverSelector = (namesArr.length > 0 ? [] : ["[data-relevant]"]);
        i = 0;
        while (i < namesArr.length) {
          cleverSelector.push("[data-relevant*=\"" + namesArr[i] + "\"]");
          i++;
        }
        console.debug("Updating branches for expressions that contain: " + namesArr.join());
        $form.find(cleverSelector.join()).each(function() {
          p = form.input.getProps($(this));
          branchNode = form.input.getWrapNodes($(this));
          if ((p.inputType === "radio" || p.inputType === "checkbox") && alreadyCovered[p.path]) {
            return false;
          }
          if (branchNode.length !== 1) {
            console.error("could not find branch node");
            return false;
          }
          try {
            result = data.evaluate(p.relevant, "boolean", p.path, p.ind);
          } catch (e) {
            console.error("Serious error occurred trying to evaluate skip logic " + "for node with name: \"" + p.path + "\" (message: " + e.message + ")");
            return false;
          }
          alreadyCovered[p.path] = true;
          if (result === true) {
            return that.enable(branchNode);
          } else {
            return that.disable(branchNode);
          }
        });
        return true;
      },
      enable: function(branchNode) {
        var type;
        type = void 0;
        console.debug("enabling branch");
        branchNode.prev(".jr-branch").hide("slow", function() {
          return $(this).remove();
        });
        branchNode.removeClass("disabled").show("blind", {
          direction: "up"
        }, 1000, function() {
          return $(this).fixLegends();
        });
        type = branchNode.prop("nodeName").toLowerCase();
        if (type === "label") {
          return branchNode.children("input, select, textarea").removeAttr("disabled");
        } else {
          return branchNode.removeAttr("disabled");
        }
      },
      disable: function(branchNode) {
        var branchClue, type;
        type = void 0;
        branchClue = "<div class=\"jr-branch ui-corner-all\"></div>";
        console.debug("disabling branch");
        branchNode.addClass("disabled").hide();
        if (branchNode.prev(".jr-branch").length === 0) {
          branchNode.before(branchClue);
          branchNode.clearInputs("change");
        }
        type = branchNode.prop("nodeName").toLowerCase();
        if (type === "label") {
          return branchNode.children("input, select, textarea").attr("disabled", "disabled");
        } else {
          return branchNode.attr("disabled", "disabled");
        }
      }
    };
    FormHTML.prototype.outputUpdate = function(changedNodeNames) {
      var $inputNode, cleverSelector, contextIndex, contextPath, expr, i, namesArr, that, val;
      i = void 0;
      $inputNode = void 0;
      contextPath = void 0;
      contextIndex = void 0;
      expr = void 0;
      namesArr = void 0;
      cleverSelector = void 0;
      that = this;
      val = "";
      console.log("updating active outputs that contain: " + changedNodeNames);
      namesArr = (typeof changedNodeNames !== "undefined" ? changedNodeNames.split(",") : []);
      cleverSelector = (namesArr.length > 0 ? [] : [".jr-output[data-value]"]);
      i = 0;
      while (i < namesArr.length) {
        cleverSelector.push(".jr-output[data-value*=\"" + namesArr[i] + "\"]");
        i++;
      }
      $form.find(":not([disabled]) span.active").find(cleverSelector.join()).each(function() {
        try {
          expr = $(this).attr("data-value");
          val = data.evaluate(expr, "string");
        } catch (e) {
          console.error("error occurred trying to evaluate output value from expression: " + expr + ", (message:" + e.message + ")");
          val = "[ERROR]";
        }
        return $(this).text(val);
      });
      $form.fixLegends();
      return this.setHints();
    };
    FormHTML.prototype.calcUpdate = function(changedNodeNames) {
      var cleverSelector, constraint, dataType, expr, i, name, namesArr, result, valid;
      i = void 0;
      name = void 0;
      expr = void 0;
      dataType = void 0;
      result = void 0;
      constraint = void 0;
      namesArr = void 0;
      valid = void 0;
      cleverSelector = void 0;
      namesArr = (typeof changedNodeNames !== "undefined" ? changedNodeNames.split(",") : []);
      cleverSelector = (namesArr.length > 0 ? [] : ["input[data-calculate]"]);
      i = 0;
      while (i < namesArr.length) {
        cleverSelector.push("input[data-calculate*=\"" + namesArr[i] + "\"]");
        i++;
      }
      return $form.find("#jr-calculated-items").find(cleverSelector.join()).each(function() {
        name = $(this).attr("name");
        expr = $(this).attr("data-calculate");
        dataType = $(this).attr("data-type-xml");
        constraint = $(this).attr("data-constraint");
        result = data.evaluate(expr, "string", name, null);
        return valid = data.node(name, null).setVal(result, constraint, dataType);
      });
    };
    FormHTML.prototype.beautify = function() {
      $form.find(".jr-group, .jr-repeat").addClass("ui-corner-all");
      $form.find("h2#form-title").addClass("ui-widget-header ui-corner-all");
      $form.find(".trigger").addClass("ui-state-highlight ui-corner-all");
      return $("fieldset:not(.jr-appearance-compact)>label, fieldset:not(.jr-appearance-compact)>legend").children("img,video,audio").parent().addClass("ui-helper-clearfix with-media");
    };
    FormHTML.prototype.widgets = {
      init: function() {
        this.compactWidget();
        this.dateWidget();
        this.timeWidget();
        this.dateTimeWidget();
        this.readonlyWidget();
        this.gridWidget();
        this.spinnerWidget();
        this.sliderWidget();
        this.geoPointWidget();
        return this.barcodeWidget();
      },
      compactWidget: function() {
        return $form.find(".jr-appearance-compact>label>span").hide();
      },
      dateWidget: function() {
        if (!Modernizr.inputtypes.date) {
          return $form.find("input[type=\"date\"]").datepicker({});
        }
      },
      timeWidget: function() {
        if (!Modernizr.inputtypes.time) {
          return $form.find("input[type=\"time\"]").timepicker({});
        }
      },
      dateTimeWidget: function() {
        if (!Modernizr.inputtypes.datetime) {
          return $form.find("input[type=\"datetime\"]").datetimepicker();
        }
      },
      selectOneWidget: function() {
        $form.find("select:not([multiple])").attr("size", "1");
        return $("select:not([multiple])").multiselect({
          multiple: false,
          header: "Select one option",
          noneSelectedText: "Select one option",
          selectedList: 1,
          position: {
            my: "left top",
            at: "left bottom"
          }
        });
      },
      selectMultiWidget: function() {
        $form.find("select[multiple]").attr("size", "5").find("[value=\"\"]").remove();
        return $("select[multiple]").multiselect({
          header: "false",
          position: {
            my: "left top",
            at: "left bottom"
          }
        });
      },
      readonlyWidget: function() {
        return $form.find("input[readonly]:not([data-type-xml=\"geopoint\"])").parent("label").each(function() {
          var attributes, html, name, relevant;
          html = $(this).html();
          relevant = $(this).find("input").attr("data-relevant");
          name = "name=\"" + $(this).find("input").attr("name") + "\"";
          attributes = (typeof relevant !== "undefined" ? "data-relevant=\"" + relevant + "\" " + name : name);
          $("<fieldset class=\"trigger ui-state-highlight ui-corner-all\" " + attributes + "></fieldset>").insertBefore($(this)).append(html).find("input").remove();
          return $(this).remove();
        });
      },
      gridWidget: function() {},
      spinnerWidget: function() {},
      sliderWidget: function() {},
      geoPointWidget: function() {
        return $form.find("input[data-type-xml=\"geopoint\"]").attr("placeholder", "Awesome geopoint widget will follow in the future!");
      },
      autoCompleteWidget: function() {},
      barcodeWidget: function() {
        return $form.find("input[data-type-xml=\"barcode\"]").attr("placeholder", "This probably does not require support for browser data entry.");
      }
    };
    FormHTML.prototype.preloads = {
      init: function() {
        var curVal, item, name, param, that;
        item = void 0;
        param = void 0;
        name = void 0;
        curVal = void 0;
        that = this;
        return $form.find("#jr-preload-items input").each(function() {
          item = $(this).attr("data-preload").toLowerCase();
          param = $(this).attr("data-preload-params").toLowerCase();
          name = $(this).attr("name");
          if (typeof that[item] !== "undefined") {
            curVal = data.node(name).getVal();
            return that.setVal($(this), that[item]({
              param: param,
              curVal: curVal,
              node: $(this)
            }));
          } else {
            return console.error("Preload \"" + item + "\"\" not supported. May or may not be a big deal.");
          }
        });
      },
      setVal: function(node, val) {
        return node.val(val.toString()).trigger("change");
      },
      timestamp: function(o) {
        var that;
        that = this;
        if (o.param === "start" && o.curVal !== "") {
          return (o.curVal === "" ? o.curVal : data.evaluate("now()", "string"));
        }
        if (o.param === "end") {
          $form.on("beforesave", function() {
            return that.setVal(o.node, data.evaluate("now()", "string"));
          });
          return data.evaluate("now()", "string");
        }
        return "";
      },
      date: function(o) {
        var day, month, today, year;
        today = void 0;
        year = void 0;
        month = void 0;
        day = void 0;
        if (o.curVal !== "") {
          today = new Date(data.evaluate("today()", "string"));
          year = today.getUTCFullYear().toString().pad(4);
          month = (today.getUTCMonth() + 1).toString().pad(2);
          day = today.getUTCDate().toString().pad(2);
          return year + "-" + month + "-" + day;
        }
        return o.curVal;
      },
      property: function(o) {
        return "no property preload in Rapaide";
      },
      context: function(o) {
        if (o.param === "application") {
          return "rapaide";
        } else {
          return "";
        }
      },
      patient: function(o) {
        return "not supported in Rapaide";
      },
      user: function(o) {
        return "user preload item not functioning yet";
      },
      uid: function(o) {
        return "no uid";
      },
      browser: function(o) {
        var a;
        if (o.param === "name") {
          a = ($.browser.webkit ? "webkit" : ($.browser.mozilla ? "mozilla" : ($.browser.opera ? "opera" : ($.browser.msie ? "msie" : "unknown"))));
          return a;
        }
        if (o.param === "version") {
          return $.browser.version;
        }
      },
      os: function(o) {
        return "not known";
      }
    };
    /*
      Variable: repeat
      
      This can perhaps be simplified and improved by:
      - adding a function repeat.update() that looks at the instance whether to add repeat form fields
      - calling update from init() (data.init() is called before form.init() so the initial repeats have been added already)
      - when button is clicked data.node().clone() or data.node().remove() is called first and then repeat.update()
      - watch out though when repeats in the middle are removed... or just disable that possibility
    */

    FormHTML.prototype.repeat = {
      /*
          Function: init
          
          Initiates all Repeat Groups in form (only called once).
          
          Returns:
          
          return description
      */

      init: function() {
        var i, numRepsDefault, numRepsInCount, numRepsInInstance, repCountPath, that;
        i = void 0;
        numRepsInCount = void 0;
        repCountPath = void 0;
        numRepsInInstance = void 0;
        numRepsDefault = void 0;
        that = this;
        $form.find("fieldset.jr-repeat").prepend("<span class=\"repeat-number\"></span>");
        $form.find("fieldset.jr-repeat:not([data-repeat-fixed])").append("<button type=\"button\" class=\"repeat\"></button><button type=\"button\" class=\"remove\"></button>");
        $form.find("button.repeat").button({
          text: false,
          icons: {
            primary: "ui-icon-plusthick"
          }
        });
        $form.find("button.remove").button({
          disabled: true,
          text: false,
          icons: {
            primary: "ui-icon-minusthick"
          }
        });
        $form.on("click", "button.repeat:enabled", function() {
          that.clone($(this).parent("fieldset.jr-repeat"));
          return false;
        });
        $form.on("click", "button.remove:enabled", function() {
          that.remove($(this).parent("fieldset.jr-repeat.clone"));
          return false;
        });
        return $form.find("fieldset.jr-repeat").each(function() {
          var _results;
          repCountPath = $(this).attr("data-repeat-count") || "";
          numRepsInCount = (repCountPath.length > 0 ? parseInt(data.node(repCountPath).getVal(), 10) : 0);
          numRepsInInstance = data.node($(this).attr("name")).get().length;
          numRepsDefault = (numRepsInCount > numRepsInInstance ? numRepsInCount : numRepsInInstance);
          i = 1;
          _results = [];
          while (i < numRepsDefault) {
            that.clone($(this).siblings().andSelf().last(), "");
            _results.push(i++);
          }
          return _results;
        });
      },
      /*
          Function: clone
          
          description
          
          Parameters:
          
          node - [type/description]
          
          Returns:
          
          return description
      */

      clone: function($node, ev) {
        var $clone, $master, $parent, i, index, path, radioNames, that, timestamp;
        $master = void 0;
        $clone = void 0;
        $parent = void 0;
        index = void 0;
        radioNames = void 0;
        i = void 0;
        path = void 0;
        timestamp = void 0;
        that = this;
        if ($node.length !== 1) {
          console.error("Nothing to clone");
          return false;
        }
        $parent = $node.parent("fieldset.jr-group");
        $master = $parent.children("fieldset.jr-repeat:not(.clone)").eq(0);
        $clone = $master.clone(false);
        $clone.find(".clone").remove();
        $clone.addClass("clone");
        $clone.find("button.remove").button({
          text: false,
          icons: {
            primary: "ui-icon-minusthick"
          }
        });
        $clone.find("button.repeat").button({
          text: false,
          icons: {
            primary: "ui-icon-plusthick"
          }
        });
        $clone.insertAfter($node).parent(".jr-group").numberRepeats();
        $clone.hide().show("highlight", {}, 600);
        $clone.clearInputs(ev);
        $clone.find(".invalid input, .invalid select, .invalid textarea").each(function() {
          return that.setValid($(this));
        });
        index = $form.find("fieldset.jr-repeat[name=\"" + $node.attr("name") + "\"]").index($node);
        radioNames = [];
        $clone.find("input[type=\"radio\"]").each(function() {
          if ($.inArray($(this).attr("data-name"), radioNames) === -1) {
            return radioNames.push($(this).attr("data-name"));
          }
        });
        i = 0;
        while (i < radioNames.length) {
          timestamp = new Date().getTime().toString();
          $clone.find("input[type=\"radio\"][data-name=\"" + radioNames[i] + "\"]").attr("name", timestamp);
          i++;
        }
        this.toggleButtons($master.parent());
        path = $master.attr("name");
        if (path.length > 0 && index >= 0) {
          data.cloneTemplate(path, index);
        }
        $form.trigger("changerepeat");
        return true;
      },
      remove: function(node) {
        var delay, parentGroup, repeatIndex, repeatPath, that;
        delay = 600;
        that = this;
        repeatPath = node.attr("name");
        repeatIndex = $form.find("[name=\"" + repeatPath + "\"]").index(node);
        parentGroup = node.parent("fieldset.jr-group");
        node.hide("drop", {}, delay, function() {
          node.remove();
          parentGroup.numberRepeats();
          return that.toggleButtons(parentGroup);
        });
        data.node(repeatPath, repeatIndex).remove();
        return $form.trigger("changerepeat");
      },
      toggleButtons: function(node) {
        node = (typeof node === "undefined" || node.length === 0 || !node ? node = $form : node);
        node.find("button.repeat, button.remove").button("disable").removeClass("ui-state-hover");
        node.find("fieldset.jr-repeat:last-child > button.repeat").button("enable");
        return node.find("fieldset.jr-repeat:not(:nth-child(2)) > button.remove").button("enable");
      }
    };
    FormHTML.prototype.setEventHandlers = function() {
      var n, that, valid;
      n = void 0;
      valid = void 0;
      that = this;
      $("form.jr").attr("onsubmit", "return false;");
      $form.on("change validate", "input, select, textarea", function(event) {
        n = that.input.getProps($(this));
        if (event.type === "validate") {
          valid = (n.enabled && n.inputType !== "hidden" ? data.node(n.path, n.ind).validate(n.constraint, n.xmlType) : true);
        } else {
          valid = data.node(n.path, n.ind).setVal(n.val, n.constraint, n.xmlType);
        }
        valid = (n.enabled && n.inputType !== "hidden" && n.required && n.val.length < 1 ? false : valid);
        if (typeof valid !== "undefined" && valid !== null) {
          if (valid === false) {
            return that.setInvalid($(this));
          } else {
            return that.setValid($(this));
          }
        }
      });
      $form.on("dataupdate", function(event, nodeNames) {
        that.calcUpdate(nodeNames);
        that.branch.update(nodeNames);
        return that.outputUpdate(nodeNames);
      });
      $form.on("change changerepeat", function(event) {
        return that.editStatus.set(true);
      });
      $form.on("changerepeat", function(event) {
        return that.setAllVals();
      });
      $(window).resize(function() {
        return $form.fixLegends();
      });
      return $form.on("changelanguage", function() {
        return that.outputUpdate();
      });
    };
    FormHTML.prototype.setValid = function(node) {
      return this.input.getWrapNodes(node).removeClass("invalid ui-state-error");
    };
    FormHTML.prototype.setInvalid = function(node) {
      return this.input.getWrapNodes(node).addClass("invalid ui-state-error");
    };
    /*
      Function: generateName
      
      Function to generate the name of a form element (= simple path to data node) corresponding to the provided data node. Omits instance node.
      
      Parameters:
      
      node - A data node of which to determine the corresponding form field name.
      
      Returns:
      
      String that looks like an XPath
    */

    FormHTML.prototype.generateName = function(dataNode) {
      var parent, steps;
      steps = [dataNode.prop("nodeName")];
      parent = dataNode.parent();
      while (parent.length === 1 && parent.prop("nodeName") !== "#document") {
        steps.push(parent.prop("nodeName"));
        parent = parent.parent();
      }
      return "/" + steps.reverse().join("/");
    };
    FormHTML.prototype.validateAll = function() {
      var that;
      that = this;
      $form.find("fieldset:disabled input, fieldset:disabled select, fieldset:disabled textarea, input:disabled, select:disabled, textarea:disabled").each(function() {
        return that.setValid($(this));
      });
      $form.find("input, select, textarea").trigger("validate");
      return this.isValid();
    };
    FormHTML.prototype.isValid = function() {
      if ($form.find(".invalid").length > 0) {
        return false;
      } else {
        return true;
      }
    };
    window.FormHTML = FormHTML;
    return void 0;
  };

  GUI.prototype.setCustomEventHandlers = function() {};

  (function($) {
    "use strict";
    $.fn.numberRepeats = function() {
      return this.each(function() {
        return $(this).find("fieldset.jr-repeat").each(function() {
          var i, qtyRepeats, repSiblings;
          repSiblings = void 0;
          qtyRepeats = void 0;
          i = void 0;
          if ($(this).prev("fieldset.jr-repeat").length === 0) {
            repSiblings = $(this).siblings("fieldset.jr-repeat");
            qtyRepeats = repSiblings.length + 1;
            if (qtyRepeats > 1) {
              $(this).find("span.repeat-number").text("1");
              i = 2;
              return repSiblings.each(function() {
                $(this).find("span.repeat-number").text(i);
                return i++;
              });
            } else {
              return $(this).find("span.repeat-number").empty();
            }
          }
        });
      });
    };
    /*
      Function: clearInputs
      
      Clears form input fields and triggers events when doing this. If formelement is cloned but not yet added to DOM
      (and not synchronized with data object), the desired event is probably 'edit' (default). If it is already added
      to the DOM (and synchronized with data object) a regular change event should be fired
      
      Parameters:
      
      ev - event to be triggered
      
      Returns:
      
      jQuery this object
    */

    $.fn.clearInputs = function(ev) {
      ev = ev || "edit";
      return this.each(function() {
        return $(this).find("input, select, textarea").each(function() {
          var type;
          type = $(this).attr("type");
          if ($(this).prop("nodeName").toUpperCase() === "SELECT") {
            type = "select";
          }
          if ($(this).prop("nodeName").toUpperCase() === "TEXTAREA") {
            type = "textarea";
          }
          if ("date number search color range url email password text file hidden textarea".split(" ").indexOf(type)) {
            return $(this).val("").trigger(ev);
          } else if ("radio checkbox".split(" ").indexOf(type)) {
            if ($(this).prop("checked")) {
              $(this).prop("checked", false);
              return $(this).trigger(ev);
            }
          } else if (type === "select") {
            $(this)[0].selectedIndex = -1;
            return $(this).trigger(ev);
          } else {
            return console.error("Unrecognized input type found when trying to reset: " + type);
          }
        });
      });
    };
    $.fn.fixLegends = function() {
      var legendHeight;
      legendHeight = void 0;
      return this.each(function() {
        return $(this).find("legend + label").each(function() {
          legendHeight = ($(this).prev().find(".jr-constraint-msg.active").length > 0 && $(this).prev().height() < 36 ? 36 : ($(this).prev().height() < 19 ? 19 : $(this).prev().height()));
          return $(this).animate({
            "margin-top": (legendHeight + 6) + "px"
          }, 600);
        });
      });
    };
    /*
      Function: xfind
      
      Simple XPath Compatibility Plugin for jQuery 1.1
      By John Resig
      Dual licensed under MIT and GPL.
      some changes made by Martijn van de Rijdt (not replacing $.find(), removed context)
      
      Parameters:
      
      selector - String containing a JQuery selector or an XPath/
      
      Returns:
      
      Nodes matching the selector.
      
      See Also:
      
      Original plugin code here: http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/xpath/jquery.xpath.js?spec=svn3167&r=3167
    */

    return $.fn.xfind = function(selector) {
      var cur, i, parts;
      parts = void 0;
      cur = void 0;
      i = void 0;
      selector = selector.replace(/\/\//g, " ");
      selector = selector.replace(/^\//, "");
      selector = selector.replace(/\/\.$/, "");
      selector = selector.replace(/\//g, ">");
      selector = selector.replace(/\[([^@].*?)\]/g, function(m, selector) {
        return ":has(" + selector + ")";
      });
      if (selector.indexOf(">..") >= 0) {
        parts = selector.split(/>\.\.>?/g);
        cur = jQuery(parts[0], this);
        i = 1;
        while (i < parts.length) {
          cur = cur.parent(parts[i]);
          i++;
        }
        return cur.get();
      }
      return this.find(selector);
    };
  })(jQuery);

}).call(this);

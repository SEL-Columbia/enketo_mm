
/*
Copyright 2012 Martijn van de Rijdt

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


(function() {
  var DEFAULT_SETTINGS, GUI, getGetVariable;

  getGetVariable = function(variable) {
    "use strict";

    var i, pair, query, vars;
    query = window.location.search.substring(1);
    vars = query.split("&");
    i = 0;
    while (i < vars.length) {
      pair = vars[i].split("=");
      if (pair[0] === variable) {
        return encodeURI(pair[1]);
      }
      i++;
    }
    return false;
  };

  DEFAULT_SETTINGS = {};

  $(function() {
    "use strict";
    window.gui = new GUI();
    return gui.init();
  });

  GUI = (function() {

    function GUI() {}

    GUI.prototype.init = function() {
      "use strict";
      this.nav.setup();
      this.pages().init();
      this.setEventHandlers();
      if (typeof this.setCustomEventHandlers === "function") {
        this.setCustomEventHandlers();
      }
      $(".dialog [title]").tooltip();
      if (Modernizr.borderradius && Modernizr.boxshadow && Modernizr.csstransitions && Modernizr.opacity) {
        $(document).trigger("browsersupport", "fancy-visuals");
      }
      return $("footer").detach().appendTo("#container");
    };

    GUI.prototype.setup = function() {
      "use strict";
      return $(window).trigger("resize");
    };

    GUI.prototype.setConsistentColors = function() {
      return "use strict";
    };

    GUI.prototype.setEventHandlers = function() {
      "use strict";

      var that;
      that = this;
      $("#feedback-bar-close").button({
        icons: {
          primary: "ui-icon-closethick"
        },
        text: false
      }).click(function(event) {
        event.preventDefault();
        return that.hideFeedback();
      });
      $("#page-close").button({
        icons: {
          primary: "ui-icon-closethick"
        },
        text: false
      }).click(function(event) {
        event.preventDefault();
        return that.pages().close();
      });
      $("#feedback-bar-close, #page-close").removeClass().addClass("custom-button ui-widget-header ui-corner-all");
      $(document).on("click", "a[href^=\"#\"]:not([href=\"#\"]):not(nav ul li a)", function(event) {
        var href;
        href = $(this).attr("href");
        if (href !== "#") {
          event.preventDefault();
          return $("nav li a[href=\"" + href + "\"]").click();
        }
      });
      $("nav ul li a[href^=\"#\"]").click(function(event) {
        var targetPage;
        event.preventDefault();
        targetPage = $(this).attr("href").substr(1);
        that.pages().open(targetPage);
        return $(this).closest("li").addClass("nav-state-active");
      });
      $(window).on("onlinestatuschange", function(e, online) {
        return that.updateStatus.connection(online);
      });
      $(document).on("edit", "form.jr", function(event, status) {
        return that.updateStatus.edit(status);
      });
      $(document).on("browsersupport", function(e, supported) {
        return that.updateStatus.support(supported);
      });
      $("#page, #feedback-bar").on("change", function() {
        return that.display();
      });
      $("header #status-connection").click(function(event) {
        that.showFeedback($(this).attr("title"));
        return event.stopPropagation();
      });
      return $(window).resize(function() {
        var logoRight, navLeft;
        $("#container").css("top", $("header").outerHeight());
        $("body:not(.no-scroll) #container").height($(window).height() - $("header").outerHeight() - $("#form-controls.bottom").outerHeight());
        navLeft = $("nav").offset().left;
        logoRight = $("#logo").offset().left + $("#logo").outerWidth();
        if (navLeft < logoRight) {
          return $("#logo").css("visibility", "hidden");
        } else {
          return $("#logo").css("visibility", "visible");
        }
      });
    };

    GUI.prototype.nav = {
      setup: function() {
        "use strict";
        return $("article.page").each(function() {
          var display, id, link, title;
          display = void 0;
          title = "";
          id = void 0;
          link = void 0;
          id = $(this).attr("id");
          if ($(this).attr("data-display")) {
            display = $(this).attr("data-display");
          } else {
            display = id;
          }
          if ($(this).attr("data-title")) {
            title = $(this).attr("data-title");
          } else {
            title = id;
          }
          if ($(this).attr("data-ext-link")) {
            link = $(this).attr("data-ext-link");
          } else {
            link = "#" + id;
          }
          return $("<li class=\"ui-corner-tl ui-corner-tr\"><a href=\"" + link + "\" title=\"" + title + "\" >" + display + "</a></li>").appendTo($("nav ul"));
        });
      },
      reset: function() {
        "use strict";
        return $("nav ul li").removeClass("nav-state-active");
      }
    };

    GUI.prototype.pages = function() {
      "use strict";
      this.init = function() {
        this.$pages = $("<pages></pages>");
        return $("article.page").detach().appendTo(this.$pages);
      };
      this.get = function(name) {
        var $page;
        $page = this.$pages.find("article[id=\"" + name + "\"]");
        $page = ($page.length > 0 ? $page : $("article[id=\"" + name + "\"]"));
        return $page;
      };
      this.isShowing = function(name) {
        var idSelector;
        idSelector = (typeof name !== "undefined" ? "[id=\"" + name + "\"]" : "");
        return $("#page article.page" + idSelector).length > 0;
      };
      this.open = function(pg) {
        var $page;
        $page = void 0;
        if (this.isShowing(pg)) {
          return;
        }
        $page = this.get(pg);
        if ($page.length !== 1) {
          return console.error("page not found");
        }
        if (this.isShowing()) {
          this.close();
        }
        $("#page-content").prepend($page.show()).trigger("change");
        $("#overlay").show();
        setTimeout((function() {
          $page.find(".scroll-list").addScrollBar();
          return $("#overlay, header").bind("click.pageEvents", function() {
            return $("#page-close").trigger("click");
          });
        }), 50);
        return $(window).bind("resize.pageEvents", function() {
          return $("#page").trigger("change");
        });
      };
      this.close = function() {
        var $page;
        $page = void 0;
        $page = $("#page .page").detach();
        this.$pages.append($page);
        $("#page").trigger("change");
        this.nav.reset();
        $("#overlay").hide();
        $("#overlay, header").unbind(".pageEvents");
        return $(window).unbind(".pageEvents");
      };
      return this;
    };

    GUI.prototype.showFeedback = function(message, duration) {
      "use strict";

      var $msg, that;
      $msg = void 0;
      that = this;
      if (!duration) {
        duration = 10 * 1000;
      } else {
        duration = duration * 1000;
      }
      $("#feedback-bar p").eq(1).remove();
      if ($("#feedback-bar p").html() !== message) {
        $msg = $("<p></p>");
        $msg.text(message);
        $("#feedback-bar").prepend($msg);
      }
      $("#feedback-bar").trigger("change");
      return setTimeout((function() {
        if (typeof $msg !== "undefined") {
          $msg.remove();
        }
        return $("#feedback-bar").trigger("change");
      }), duration);
    };

    GUI.prototype.hideFeedback = function() {
      "use strict";
      $("#feedback-bar p").remove();
      return $("#feedback-bar").trigger("change");
    };

    GUI.prototype.alert = function(message, heading, icon) {
      "use strict";

      var $alert, closeFn;
      closeFn = void 0;
      $alert = $("#dialog-alert");
      heading = heading || "Alert";
      icon = icon || "ui-icon-alert";
      $alert.find("p .ui-icon:eq(0)").removeClass().addClass("ui-icon " + icon);
      closeFn = function() {
        $alert.dialog("destroy");
        return $alert.find("#dialog-alert-msg").text("");
      };
      $alert.find("#dialog-alert-msg").html(message).capitalizeStart();
      return $alert.dialog({
        title: heading,
        modal: true,
        resizable: false,
        closeOnEscape: true,
        buttons: {
          Ok: closeFn
        },
        beforeClose: closeFn,
        width: 500
      });
    };

    GUI.prototype.confirm = function(text, choices) {
      "use strict";

      var $dialog, closeFn, dialogName, errorMsg, heading, msg;
      msg = void 0;
      heading = void 0;
      errorMsg = void 0;
      closeFn = void 0;
      dialogName = void 0;
      $dialog = void 0;
      if (typeof text === "string") {
        msg = text;
      } else {
        if (typeof text.msg === "string") {
          msg = text.msg;
        }
      }
      msg = (typeof msg !== "undefined" ? msg : "Please confirm action");
      heading = (typeof text.heading !== "undefined" ? text.heading : "Are you sure?");
      dialogName = (typeof text.dialog !== "undefined" ? text.dialog : "confirm");
      choices = (typeof choices !== "undefined" ? choices : {});
      choices.posButton = choices.posButton || "Confirm";
      choices.negButton = choices.negButton || "Cancel";
      choices.posAction = choices.posAction || function() {
        return false;
      };
      choices.negAction = choices.negAction || function() {
        return false;
      };
      choices.beforeAction = choices.beforeAction || function() {};
      closeFn = function() {
        $dialog.dialog("destroy");
        $dialog.find(".dialog-msg, .dialog-error").text("");
        return console.debug("dialog destroyed");
      };
      $dialog = $("#dialog-" + dialogName);
      $dialog.find(".dialog-msg").html(msg).capitalizeStart();
      return $dialog.dialog({
        open: choices.beforeAction,
        title: heading,
        resizable: false,
        modal: true,
        closeOnEscape: true,
        buttons: [
          {
            text: choices.posButton,
            click: function() {
              choices.posAction.call();
              if ($dialog.find(".dialog-error").text().length === 0) {
                return closeFn.call();
              }
            }
          }, {
            text: choices.negButton,
            click: function() {
              choices.negAction.call();
              return closeFn.call();
            }
          }
        ],
        width: 500,
        beforeClose: closeFn
      });
    };

    GUI.prototype.updateStatus = {
      connection: function(online) {
        "use strict";
        console.log("updating online status in menu bar to:");
        console.log(online);
        if (online) {
          return $("header #status-connection").removeClass().addClass("ui-icon ui-icon-signal-diag").attr("title", "It appears there is currently an Internet connection available.");
        } else {
          return $("header #status-connection").removeClass().addClass("ui-icon ui-icon-cancel").attr("title", "It appears there is currently no Internet connection");
        }
      },
      edit: function(editing) {
        "use strict";
        if (editing) {
          return $("header #status-editing").removeClass().addClass("ui-icon ui-icon-pencil").attr("title", "Form is being edited.");
        } else {
          return $("header #status-editing").removeClass().attr("title", "");
        }
      },
      support: function(supported) {
        "use strict";

        var $page;
        $page = gui.pages().get("settings");
        if ($page.length > 0) {
          console.debug("updating browser support for " + supported);
          return $page.find("#settings-browserSupport-" + supported + " span.ui-icon").addClass("ui-icon-check");
        }
      }
    };

    GUI.prototype.display = function() {
      "use strict";

      var $feedback, $header, $page, feedbackTop, pageTop;
      feedbackTop = void 0;
      pageTop = void 0;
      $header = $("header");
      $feedback = $("#feedback-bar");
      $page = $("#page");
      if ($feedback.find("p").length > 0) {
        feedbackTop = $header.outerHeight();
        if (this.pages().isShowing()) {
          pageTop = $header.outerHeight() + $feedback.outerHeight();
        } else {
          pageTop = $header.outerHeight() + $feedback.outerHeight() - $page.outerHeight();
        }
      } else {
        feedbackTop = $header.outerHeight() - $feedback.outerHeight();
        if (this.pages().isShowing()) {
          pageTop = $header.outerHeight();
        } else {
          pageTop = $header.outerHeight() - $page.outerHeight();
        }
      }
      $feedback.css("top", feedbackTop);
      return $page.css("top", pageTop);
    };

    GUI.prototype.setSettings = function(settings) {
      "use strict";

      var $input, that;
      $input = void 0;
      that = this;
      console.log("gui updateSettings() started");
      return $.each(settings, function(key, value) {
        $input = (value ? that.pages().get("settings").find("input[name=\"" + key + "\"][value=\"" + value + "\"]") : that.pages().get("settings").find("input[name=\"" + key + "\"]"));
        value = (value ? true : false);
        if ($input.length > 0) {
          return $input.attr("checked", value).trigger("change");
        }
      });
    };

    return GUI;

  })();

  window.GUI = GUI;

  /*
  Pads a string with prefixed zeros until the requested string length is achieved.
  @param  {number} digits [description]
  @return {String|string}        [description]
  */


  String.prototype.pad = function(digits) {
    var x;
    x = this;
    while (x.length < digits) {
      x = "0" + x;
    }
    return x;
  };

  /*
  JQuery Extensions *************
  */


  (function($) {
    "use strict";
    $.fn.equalWidth = function() {
      var largestWidth;
      largestWidth = 0;
      return this.each(function() {
        if ($(this).width() > largestWidth) {
          return largestWidth = $(this).width();
        }
      }).each(function() {
        return $(this).width(largestWidth);
      });
    };
    $.fn.reverse = [].reverse;
    $.fn.alphanumeric = function(p) {
      p = $.extend({
        ichars: "!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- ",
        nchars: "",
        allow: ""
      }, p);
      return this.each(function() {
        var ch, i, reg, s;
        if (p.nocaps) {
          p.nchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (p.allcaps) {
          p.nchars += "abcdefghijklmnopqrstuvwxyz";
        }
        s = p.allow.split("");
        i = 0;
        while (i < s.length) {
          if (p.ichars.indexOf(s[i]) !== -1) {
            s[i] = "\\" + s[i];
          }
          i++;
        }
        p.allow = s.join("|");
        reg = new RegExp(p.allow, "gi");
        ch = p.ichars + p.nchars;
        ch = ch.replace(reg, "");
        $(this).keypress(function(e) {
          var k;
          k = void 0;
          if (!e.charCode) {
            k = String.fromCharCode(e.which);
          } else {
            k = String.fromCharCode(e.charCode);
          }
          if (ch.indexOf(k) !== -1) {
            e.preventDefault();
          }
          if (e.ctrlKey && k === "v") {
            return e.preventDefault();
          }
        });
        return $(this).bind("contextmenu", function() {
          return false;
        });
      });
    };
    $.fn.numeric = function(p) {
      var az;
      az = "abcdefghijklmnopqrstuvwxyz";
      az += az.toUpperCase();
      p = $.extend({
        nchars: az
      }, p);
      return this.each(function() {
        return $(this).alphanumeric(p);
      });
    };
    $.fn.alpha = function(p) {
      var nm;
      nm = "1234567890";
      p = $.extend({
        nchars: nm
      }, p);
      return this.each(function() {
        return $(this).alphanumeric(p);
      });
    };
    $.fn.capitalizeStart = function(numWords) {
      var first, node, text;
      if (!numWords) {
        numWords = 1;
      }
      node = this.contents().filter(function() {
        return this.nodeType === 3;
      }).first();
      text = node.text();
      first = text.split(" ", numWords).join(" ");
      if (!node.length) {
        return;
      }
      node[0].nodeValue = text.slice(first.length);
      return node.before("<span class=\"capitalize\">" + first + "</span>");
    };
    return $.fn.addScrollBar = function() {
      return this.each(function() {
        var difference, handleHeight, origSliderHeight, proportion, scrollContent, scrollPane, sliderHeight, sliderMargin;
        scrollPane = $(this);
        scrollContent = $(this).find("ol");
        scrollPane.css("overflow", "hidden");
        difference = scrollContent.height() - scrollPane.height();
        if (difference > 0) {
          proportion = difference / scrollContent.height();
          handleHeight = Math.round((1 - proportion) * scrollPane.height());
          handleHeight -= handleHeight % 2;
          $("#records .column.middle").html("<div id=\"slider-wrap\" class=\"ui-corner-all\"><div id=\"slider-vertical\"></div></div>");
          $("#slider-wrap").height(scrollPane.outerHeight());
          $("#slider-vertical").slider({
            orientation: "vertical",
            range: "max",
            min: 0,
            max: 100,
            value: 100,
            slide: function(event, ui) {
              var topValue;
              topValue = -((100 - ui.value) * difference / 100);
              return scrollContent.css({
                top: topValue
              });
            }
          });
          $("#slider-wrap").css("margin-top", $("#records-saved h3").outerHeight(true));
          $(".ui-slider-handle").css({
            height: handleHeight,
            "margin-bottom": -0.5 * handleHeight
          });
          origSliderHeight = $("#slider-vertical").height();
          sliderHeight = origSliderHeight - handleHeight;
          sliderMargin = (origSliderHeight - sliderHeight) * 0.5;
          $(".ui-slider").css({
            height: sliderHeight,
            "margin-top": sliderMargin
          });
          $(".ui-slider-range").css({
            top: -sliderMargin
          });
          return $("#slider-wrap").click(function() {
            $("#slider-vertical").slider("value", 0);
            return scrollContent.css({
              top: -difference
            });
          });
        }
      });
    };
  })(jQuery);

}).call(this);

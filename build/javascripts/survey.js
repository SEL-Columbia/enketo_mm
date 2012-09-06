
/*
@preserve Copyright 2012 Martijn van de Rijdt

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


/*
@type {Form}
*/


/*
@type {Connection}
*/


/*
@type {Cache}
*/


/*
@type {Settings}
*/


/*
@type {StorageLocal}
*/


/*
Document Ready ***************
*/


(function() {
  var CACHE_CHECK_INTERVAL, Cache, Connection, DEFAULT_SETTINGS, MODERN_BROWSERS_URL, cache, checkCache, connection, currentOnlineStatus, deleteForm, exportData, loadForm, resetForm, saveForm;

  checkCache = function() {
    "use strict";
    cache.checkForUpdate();
    return window.setTimeout((function() {
      console.log("going to provide cache feedback to user. cache.getError=" + cache.getError());
      if (cache.updateReady()) {
        return gui.showFeedback("A new version of this application has been downloaded. " + "Please save your work and refresh to update.", 20);
      } else if (cache.getError()) {
        if (cache.getError() === "security") {
          return gui.showFeedback("Please allow site to store data for offline use and refresh.", 60);
        } else {
          return gui.alert("An error occurred with the application cache. " + "You may have a problem launching offline (error: " + cache.getError() + "). " + "Please save your work, refresh and check if offline launch works.");
        }
      }
    }), 30 * 1000);
  };

  /*
  [loadForm description]
  @param  {string} formName  [description]
  @param  {boolean=} confirmed [description]
  */


  loadForm = function(formName, confirmed) {
    "use strict";

    var choices, message, record;
    message = void 0;
    choices = void 0;
    record = void 0;
    if (!confirmed && form.getEditStatus()) {
      message = "Would you like to proceed without saving changes to the form you were working on?";
      choices = {
        posAction: function() {
          return loadForm(formName, true);
        }
      };
      return gui.confirm(message, choices);
    } else {
      record = window.store.getRecord(formName);
      if (record.data !== null) {
        form.reset();
        window.form = new Form("form.jr:eq(0)", record.data);
        window.form.init();
        form.setRecordName(formName);
        $("#page-close").click();
        $("button#delete-form").button("enable");
        return gui.showFeedback("\"" + formName + "\" has been loaded", 2);
      } else {
        return gui.alert("Record contained no data");
      }
    }
  };

  /*
  [saveForm description]
  @param  {string=} confirmedRecordName  [description]
  @param  {string|boolean=} confirmedFinalStatus [description]
  @param  {boolean=} deleteOldName        [description]
  @param  {boolean=} overwriteExisting    [description]                   [description]
  */


  saveForm = function(confirmedRecordName, confirmedFinalStatus, deleteOldName, overwriteExisting) {
    "use strict";

    var choices, curRecordFinal, curRecordName, message, rec, result;
    result = void 0;
    message = void 0;
    choices = void 0;
    curRecordName = form.getRecordName();
    curRecordFinal = form.getRecordStatus();
    rec = {};
    console.debug("new name: " + confirmedRecordName + ", before: " + curRecordName + ", delOld: " + deleteOldName + ", overwr: " + overwriteExisting);
    if (form.getDataStr(true, true) === null || form.getDataStr(true, true) === "") {
      return gui.showFeedback("Nothing to save.");
    }
    if (typeof confirmedRecordName === "undefined" || confirmedRecordName.length === 0) {
      curRecordName = curRecordName || window.store.getCounterValue();
      $("#dialog-save input[name=\"record-name\"]").val(curRecordName);
      $("#dialog-save input[name=\"record-final\"]").attr("checked", curRecordFinal);
      return gui.saveConfirm();
    }
    if (curRecordName && curRecordName !== confirmedRecordName && typeof deleteOldName === "undefined") {
      message = "Record name has changed. Would you like to delete the record saved under the old name:" + curRecordName + "?";
      choices = {
        posButton: "Yes, delete",
        negButton: "No, keep",
        posAction: function() {
          return saveForm(confirmedRecordName, confirmedFinalStatus, true);
        },
        negAction: function() {
          return saveForm(confirmedRecordName, confirmedFinalStatus, false);
        }
      };
      return gui.confirm({
        msg: message,
        heading: "Delete old Record?"
      }, choices);
    }
    $("form.jr").trigger("beforesave");
    rec = {
      data: form.getDataStr(true, true),
      ready: confirmedFinalStatus
    };
    console.debug("sending following record to store.setRecord():");
    console.debug(rec);
    result = window.store.setRecord(confirmedRecordName, rec, deleteOldName, overwriteExisting, curRecordName);
    console.log("result of save: " + result);
    if (result === "success") {
      gui.showFeedback("Form with name \"" + confirmedRecordName + "\" has been saved.", 2);
      form.setRecordName(confirmedRecordName);
      form.setRecordStatus(confirmedFinalStatus);
      form.setEditStatus(false);
      $("button#delete-form").button("enable");
      return $("form.jr").trigger("save", JSON.stringify(window.store.getFormList()));
    } else if (result === "existing") {
      message = "Record with name " + confirmedRecordName + " already exists. Would you like to overwrite existing record? ";
      choices = {
        posButton: "Yes, overwrite",
        posAction: function() {
          return saveForm(confirmedRecordName, confirmedFinalStatus, deleteOldName, true);
        },
        negAction: function() {
          return gui.showFeedback("Form was not saved.");
        }
      };
      return gui.confirm(message, choices);
    } else if (result === "forbidden") {
      gui.alert("This name is not allowed. Please change it");
      return gui.showFeedback("Form was NOT saved.");
    } else {
      return gui.showFeedback("Error occurred. Form was NOT saved.");
    }
  };

  resetForm = function(confirmed) {
    "use strict";

    var choices, message;
    message = void 0;
    choices = void 0;
    console.debug("editstatus: " + form.getEditStatus());
    if (!confirmed && form.getEditStatus()) {
      message = "There are unsaved changes, would you like to continue <strong>without</strong> saving those?";
      choices = {
        posAction: function() {
          return resetForm(true);
        }
      };
      return gui.confirm(message, choices);
    } else {
      window.form.reset();
      window.form = new Form("form.jr:eq(0)", jrDataStr);
      window.form.init();
      return $("button#delete-form").button("disable");
    }
  };

  deleteForm = function(confirmed) {
    "use strict";

    var choices, key, message, success;
    message = void 0;
    choices = void 0;
    key = form.getRecordName();
    if (key !== "" && key !== null) {
      if (confirmed) {
        success = window.store.removeRecord(key);
        if (success) {
          resetForm(true);
          gui.showFeedback("Successfully deleted form.");
          $("form.jr").trigger("delete", JSON.stringify(window.store.getFormList()));
        } else {
          gui.showFeedback("An error occurred when trying to delete this form.");
        }
      } else {
        message = "Please confirm that you would like to remove this form from storage.";
        choices = {
          posButton: "Delete",
          posAction: function() {
            return deleteForm(true);
          }
        };
        gui.confirm(message, choices);
      }
    } else {
      gui.showFeedback("Please first load the form you would like to delete or choose reset if you'd like to reset the current form.");
    }
  };

  exportData = function(finalOnly) {
    "use strict";

    var newWindow, uriContent;
    uriContent = void 0;
    newWindow = void 0;
    finalOnly = finalOnly || true;
    window.data = window.store.getSurveyDataXMLStr(finalOnly);
    if (!data) {
      return gui.showFeedback("No data marked \"final\" to export.");
    } else {
      uriContent = "data:application/octet-stream," + encodeURIComponent(data);
      return newWindow = window.open(uriContent, "exportedData");
    }
  };

  Cache = function() {
    "use strict";

    var appCache, cacheType, error, loadedVersion, update;
    cacheType = void 0;
    appCache = void 0;
    update = void 0;
    error = void 0;
    loadedVersion = void 0;
    this.init = function() {
      if (window.applicationCache) {
        cacheType = "html5Cache";
        appCache = window.applicationCache;
        appCache.addEventListener("updateready", (function() {
          appCache.swapCache();
          return update = true;
        }), false);
        return appCache.addEventListener("error", (function(event) {
          console.log("HTML5 cache error event");
          if (connection.getOnlineStatus()) {
            console.log("noticed online status");
            return error = "error downloading application";
          }
        }), false);
      }
    };
    this.isSupported = function() {
      if (cacheType === "html5Cache" || cacheType === "gearsCache") {
        return true;
      } else {
        return false;
      }
    };
    this.checkForUpdate = function() {
      console.log("checking for cache update");
      try {
        appCache.update();
      } catch (e) {
        if (e.name === "NS_ERROR_DOM_SECURITY_ERR") {
          error = "security";
        }
        console.log("error thrown during cache update. error name: " + e.name + "  message: " + e.message);
      }
    };
    this.updateReady = function() {
      console.log("updateReady() returns: " + update);
      return update;
    };
    return this.getError = function() {
      return error;
    };
  };

  Connection = function() {
    "use strict";

    var that;
    that = this;
    this.uploadOngoing = false;
    return this.init = function() {
      $(window).on("offline online", function() {
        return that.setOnlineStatus(that.getOnlineStatus());
      });
      return $(window).trigger("online");
    };
  };

  connection = void 0;

  cache = void 0;

  currentOnlineStatus = false;

  MODERN_BROWSERS_URL = "modern_browsers";

  DEFAULT_SETTINGS = {
    autoUpload: true,
    buttonLocation: "bottom",
    autoNotifyBackup: false
  };

  CACHE_CHECK_INTERVAL = 3600 * 1000;

  $(document).ready(function() {
    "use strict";

    var bookmark, choices, message, shown, time;
    bookmark = void 0;
    message = void 0;
    choices = void 0;
    shown = void 0;
    time = void 0;
    window.store = new StorageLocal();
    window.form = new Form("form.jr:eq(0)", jrDataStr);
    alert(window.form);
    window.settings = new Settings();
    window.settings.init();
    connection = new Connection();
    if (!window.store.isSupported()) {
      window.location = MODERN_BROWSERS_URL;
    } else {
      $(document).trigger("browsersupport", "local-storage");
    }
    bookmark = window.store.getRecord("__bookmark");
    shown = (bookmark ? bookmark["shown"] : 0);
    if (shown < 3) {
      setTimeout((function() {
        time = (shown === 1 ? "time" : "times");
        gui.showFeedback("Please bookmark this page for easy offline launch. " + "This reminder will be shown " + (2 - shown) + " more " + time + ".", 20);
        shown++;
        return window.store.setRecord("__bookmark", {
          shown: shown
        });
      }), 5 * 1000);
    }
    if ($("html").attr("manifest")) {
      cache = new Cache();
      cache.init();
      if (cache.isSupported()) {
        $(document).trigger("browsersupport", "offline-launch");
        checkCache();
        window.setInterval((function() {
          return checkCache();
        }), CACHE_CHECK_INTERVAL);
      } else {
        message = "Offline application launch not supported by your browser. " + "You can use it without this feature or see options for resolving this";
        choices = {
          posButton: "Show options",
          negButton: "Use it",
          posAction: function() {
            return window.location = MODERN_BROWSERS_URL;
          }
        };
        gui.confirm({
          msg: message,
          heading: "Application cannot launch offline"
        }, choices);
      }
      console.log("cache initialized");
    }
    window.form.init();
    connection.init();
    gui.setup();
    return $("form.jr").trigger("save", JSON.stringify(window.store.getFormList()));
  });

  Connection.prototype.getOnlineStatus = function() {
    console.log("checking connection status");
    return navigator.onLine;
  };

  Connection.prototype.setOnlineStatus = function(newStatus) {
    if (newStatus !== this.currentOnlineStatus) {
      console.log("status changed to: " + newStatus + ", triggering window.onlinestatuschange");
      $(window).trigger("onlinestatuschange", newStatus);
    }
    return this.currentOnlineStatus = newStatus;
  };

  Connection.prototype.upload = function(force, excludeName) {
    var autoUpload, i, name, result;
    i = void 0;
    name = void 0;
    result = void 0;
    autoUpload = (settings.getOne("autoUpload") === "true" || settings.getOne("autoUpload") === true ? true : false);
    if ((typeof this.uploadQueue === "undefined" || this.uploadQueue.length === 0) && (autoUpload === true || force)) {
      this.uploadResult = {
        win: [],
        fail: [],
        force: force
      };
      this.uploadQueue = window.store.getSurveyDataArr(true, excludeName);
      if (this.uploadQueue.length === 0) {
        return (force ? gui.showFeedback("Nothing marked \"final\" to upload (or record is currently open).") : false);
      }
      return this.uploadOne();
    }
  };

  Connection.prototype.uploadOne = function() {
    var content, last, record, that;
    record = void 0;
    content = void 0;
    last = void 0;
    that = this;
    if (this.uploadQueue.length > 0) {
      record = this.uploadQueue.pop();
      content = new FormData();
      content.append("xml_submission_data", record.data);
      content.append("Date", new Date().toUTCString());
      last = (this.uploadQueue.length === 0 ? true : false);
      return $.ajax("data/submission", {
        type: "POST",
        data: content,
        cache: false,
        contentType: false,
        processData: false,
        complete: function(jqXHR, response) {
          that.processOpenRosaResponse(jqXHR.status, record.name, last);
          return that.uploadOne();
        }
      });
    }
  };

  Connection.prototype.processOpenRosaResponse = function(status, name, last) {
    var i, msg, names, namesStr, statusMap, waswere;
    i = void 0;
    waswere = void 0;
    namesStr = void 0;
    msg = "";
    names = [];
    statusMap = {
      0: {
        success: false,
        msg: "Uploading of data failed (probably offline)"
      },
      200: {
        success: false,
        msg: "Data server did not accept data for " + name + ". Contact Enketo helpdesk please."
      },
      201: {
        success: true,
        msg: ""
      },
      202: {
        success: true,
        msg: name + " may have had errors. Contact survey administrator please."
      },
      "2xx": {
        success: false,
        msg: "Unknown error occurred when submitting data for " + name + ". Contact Enketo helpdesk please"
      },
      400: {
        success: false,
        msg: "Data server did not accept data for " + name + " Contact survey administrator please."
      },
      403: {
        success: false,
        msg: "You are not allowed to post data to this data server. Contact survey administrator please."
      },
      404: {
        success: false,
        msg: "Submission area on data server not found or not properly configured."
      },
      "4xx": {
        success: false,
        msg: "Unknown submission problem on data server."
      },
      413: {
        success: false,
        msg: "Data for " + name + " is too large. Please export the data and contact the Enketo helpdesk please."
      },
      500: {
        success: false,
        msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."
      },
      503: {
        success: false,
        msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."
      },
      "5xx": {
        success: false,
        msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."
      }
    };
    console.debug("name: " + name);
    console.debug(status);
    if (typeof statusMap[status] !== "undefined") {
      if (statusMap[status].success === true) {
        window.store.removeRecord(name);
        $("form.jr").trigger("delete", JSON.stringify(window.store.getFormList()));
        console.log("tried to remove record with key: " + name);
        this.uploadResult.win.push([name, statusMap[status].msg]);
      } else {
        if (statusMap[status].success === false) {
          this.uploadResult.fail.push([name, statusMap[status].msg]);
        }
      }
    } else if (status > 500) {
      console.error("error during uploading, received unexpected statuscode: " + status);
      this.uploadResult.fail.push([name, statusMap["5xx"].msg]);
    } else if (status > 400) {
      console.error("error during uploading, received unexpected statuscode: " + status);
      this.uploadResult.fail.push([name, statusMap["4xx"].msg]);
    } else if (status > 200) {
      console.error("error during uploading, received unexpected statuscode: " + status);
      this.uploadResult.fail.push([name, statusMap["2xx"].msg]);
    }
    if (last !== true) {
      return;
    }
    if (this.uploadResult.win.length > 0) {
      i = 0;
      while (i < this.uploadResult.win.length) {
        names.push(this.uploadResult.win[i][0]);
        msg = (typeof this.uploadResult.win[i][2] !== "undefined" ? msg + this.uploadResult.win[i][1] + " " : "");
        i++;
      }
      waswere = (i > 1 ? " were" : " was");
      namesStr = names.join(", ");
      gui.showFeedback(namesStr.substring(0, namesStr.length) + waswere + " successfully uploaded. " + msg);
    }
    if (this.uploadResult.fail.length > 0) {
      if (this.uploadResult.force === true) {
        i = 0;
        while (i < this.uploadResult.fail.length) {
          msg += this.uploadResult.fail[i][0] + ": " + this.uploadResult.fail[i][1] + "<br />";
          i++;
        }
        gui.alert(msg, "Failed data submission");
      } else {

      }
    }
    return this.uploadOngoing = false;
  };

  Settings.prototype["autoUpload"] = function(val) {};

  Settings.prototype["buttonLocation"] = function(val) {
    "use strict";
    $("#form-controls").removeClass("bottom right mobile").addClass(val);
    return $(window).trigger("resize");
  };

  GUI.prototype.setCustomEventHandlers = function() {
    "use strict";

    var settingsForm, that;
    settingsForm = void 0;
    that = this;
    $("button#save-form").button({
      icons: {
        primary: "ui-icon-disk"
      }
    }).click(function() {
      form.validateForm();
      return saveForm();
    });
    $("button#reset-form").button({
      icons: {
        primary: "ui-icon-refresh"
      }
    }).click(function() {
      return resetForm();
    });
    $("button#delete-form").button({
      icons: {
        primary: "ui-icon-trash"
      },
      disabled: true
    }).click(function() {
      return deleteForm(false);
    });
    $("#form-controls button").equalWidth();
    /*
      @type {string}
    */

    $(document).on("click", "#records-saved li:not(.no-click)", function(event) {
      var name;
      event.preventDefault();
      name = $(this).find(".name").text();
      loadForm(name);
      $(this).siblings().removeClass("ui-state-active");
      return $(this).addClass("ui-state-active");
    }).on("mouseenter", "#records-saved li:not(.no-click)", function() {
      return $(this).addClass("ui-state-hover");
    }).on("mouseleave", "#records-saved li:not(.no-click)", function() {
      return $(this).removeClass("ui-state-hover");
    });
    this.pages().get("records").find("button#records-force-upload").button({
      icons: {
        primary: "ui-icon-arrowthick-1-n"
      }
    }).click(function() {
      return connection.upload(true, form.getRecordName());
    }).hover((function() {
      return $("#records-force-upload-info").show();
    }), function() {
      return $("#records-force-upload-info").hide();
    });
    this.pages().get("records").find("button#records-export").button({
      icons: {
        primary: "ui-icon-suitcase"
      }
    }).click(function() {
      return exportData(false);
    }).hover((function() {
      return $("#records-export-info").show();
    }), function() {
      return $("#records-export-info").hide();
    });
    $(document).on("save delete", "form.jr", function(e, formList) {
      return that.updateRecordList(JSON.parse(formList));
    });
    $(document).on("setsettings", function(e, settings) {
      console.debug("settingschange detected, GUI will be updated with settings:");
      return that.setSettings(settings);
    });
    this.pages().get("settings").on("change", "input", function() {
      var name, value;
      name = $(this).attr("name");
      value = ($(this).is(":checked") ? $(this).val().toString() : "");
      console.debug("settings change by user detected");
      return settings.set(name, value);
    });
    return $("#dialog-save").hide();
  };

  GUI.prototype.updateRecordList = function(recordList, $page) {
    "use strict";

    var $li, $list, clss, date, draftFormsQty, finishedFormsQty, i, icon, name;
    name = void 0;
    date = void 0;
    clss = void 0;
    i = void 0;
    icon = void 0;
    $list = void 0;
    $li = void 0;
    finishedFormsQty = 0;
    draftFormsQty = 0;
    console.debug("updating recordlist in GUI");
    if (!$page) {
      $page = this.pages().get("records");
    }
    $list = $page.find("#records-saved ol");
    $list.children().remove();
    recordList = recordList || [];
    if (recordList.length > 0) {
      i = 0;
      while (i < recordList.length) {
        name = recordList[i].key;
        date = new Date(recordList[i]["lastSaved"]).toDateString();
        if (recordList[i]["ready"]) {
          icon = "check";
          finishedFormsQty++;
        } else {
          icon = "pencil";
          draftFormsQty++;
        }
        $li = $("<li><span class=\"ui-icon ui-icon-" + icon + "\"></span><span class=\"name\">" + "</span><span class=\"date\"> (" + date + ")</span></li>");
        $li.find(".name").text(name);
        $list.append($li);
        i++;
      }
    } else {
      $("<li class=\"no-click\">no locally saved records found</li>").appendTo($list);
    }
    $page.find("#records-draft-qty").text(draftFormsQty);
    return $page.find("#records-final-qty").text(finishedFormsQty);
  };

  GUI.prototype.saveConfirm = function() {
    "use strict";

    var $saveConfirm;
    $saveConfirm = $("#dialog-save");
    return this.confirm({
      dialog: "save",
      msg: "",
      heading: "Record Details"
    }, {
      posButton: "Ok",
      negButton: "Cancel",
      posAction: function() {
        console.debug("value of final in confirm dialog: " + Boolean($saveConfirm.find("[name=\"record-final\"]:checked").val()));
        return saveForm($saveConfirm.find("[name=\"record-name\"]").val(), Boolean($saveConfirm.find("[name=\"record-final\"]:checked").val()));
      },
      negAction: function() {
        return false;
      },
      beforeAction: function() {
        if (!form.isValid()) {
          console.log("form invalid");
          return $saveConfirm.find("[name=\"record-final\"]").attr("disabled", "disabled");
        } else {
          console.log("form valid");
          return $saveConfirm.find("[name=\"record-final\"]").removeAttr("disabled");
        }
      }
    });
  };

}).call(this);

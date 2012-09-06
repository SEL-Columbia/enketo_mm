
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


(function() {
  var Settings, StorageLocal, isNumber;

  StorageLocal = (function() {
    var RESERVED_KEYS, isExistingKey, isReservedKey, localStorage;

    function StorageLocal() {}

    RESERVED_KEYS = ["__settings", "null", "__history", "Firebug", "undefined", "__bookmark", "__counter"];

    isReservedKey = function(k) {
      var i;
      i = 0;
      while (i < RESERVED_KEYS.length) {
        if (k === RESERVED_KEYS[i]) {
          return true;
        }
        i++;
      }
      return false;
    };

    isExistingKey = function(k) {
      return !!localStorage.getItem(k);
    };

    localStorage = window.localStorage;

    StorageLocal.prototype.isSupported = function() {
      try {
        return "localStorage" in window && window["localStorage"] !== null;
      } catch (e) {
        return false;
      }
    };

    StorageLocal.prototype.getForbiddenKeys = function() {
      return RESERVED_KEYS;
    };

    StorageLocal.prototype.setRecord = function(newKey, record, del, overwrite, oldKey) {
      console.debug("setRecord received record with final: " + record["ready"]);
      if (!newKey || newKey.length < 1) {
        console.error("no key provided for record");
        return "require";
      }
      newKey = newKey.trim();
      oldKey = (typeof oldKey === "string" ? oldKey.trim() : null);
      overwrite = (typeof overwrite !== "undefined" && overwrite === true ? true : false);
      if (typeof record["data"] === "string" && isReservedKey(newKey)) {
        return "forbidden";
      }
      if (typeof record["data"] === "string" && oldKey !== newKey && isExistingKey(newKey) && overwrite !== true) {
        return "existing";
      }
      try {
        if (typeof record["data"] === "string") {
          record["lastSaved"] = (new Date()).getTime();
          localStorage.setItem("__counter", JSON.stringify({
            counter: this.getCounterValue()
          }));
        }
        localStorage.setItem(newKey, JSON.stringify(record));
        console.debug("saved: " + newKey + ", old key was: " + oldKey);
        if (oldKey !== null && oldKey !== "" && oldKey !== newKey) {
          if (del) {
            console.log("going to remove old record with key:" + oldKey);
            this.removeRecord(oldKey);
          }
        }
        return "success";
      } catch (e) {
        console.log("error in store.setRecord:" + e.message);
        return "error";
      }
    };

    StorageLocal.prototype.getRecord = function(key) {
      var record;
      record = void 0;
      try {
        record = JSON.parse(localStorage.getItem(key));
        return record;
      } catch (e) {
        console.error("error with loading data from store: " + e.message);
        return null;
      }
    };

    StorageLocal.prototype.removeRecord = function(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        console.log("error with removing data from store: " + e.message);
        return false;
      }
    };

    StorageLocal.prototype.getFormList = function() {
      var formList, i, ready, record, records;
      i = void 0;
      ready = void 0;
      record = void 0;
      formList = [];
      records = this.getSurveyRecords(false);
      i = 0;
      while (i < records.length) {
        record = records[i];
        formList.push({
          key: record["key"],
          ready: record["ready"],
          lastSaved: record["lastSaved"]
        });
        i++;
      }
      console.debug("formList returning " + formList.length + " items");
      formList.sort(function(a, b) {
        return b["lastSaved"] - a["lastSaved"];
      });
      console.debug("formlist: " + JSON.stringify(formList));
      return formList;
    };

    StorageLocal.prototype.getSurveyRecords = function(finalOnly, excludeName) {
      var i, key, record, records;
      i = void 0;
      key = void 0;
      records = [];
      record = {};
      finalOnly = finalOnly || false;
      excludeName = excludeName || null;
      i = 0;
      while (i < localStorage.length) {
        key = localStorage.key(i);
        record = this.getRecord(key);
        if (!isReservedKey(key)) {
          try {
            record.key = key;
            if (key !== excludeName && (!finalOnly || record["ready"] === "true" || record["ready"] === true)) {
              records.push(record);
            }
          } catch (e) {
            console.log("record found that was probably not in the correct JSON format" + " (e.g. Firebug settings or corrupt record) (error: " + e.message + "), record was ignored");
          }
        }
        i++;
      }
      return records;
    };

    StorageLocal.prototype.getSurveyDataArr = function(finalOnly, excludeName) {
      var dataArr, i, records;
      i = void 0;
      records = void 0;
      dataArr = [];
      finalOnly = finalOnly || true;
      records = this.getSurveyRecords(finalOnly, excludeName);
      i = 0;
      while (i < records.length) {
        dataArr.push({
          name: records[i].key,
          data: records[i]["data"]
        });
        i++;
      }
      return dataArr;
    };

    StorageLocal.prototype.getSurveyDataXMLStr = function(finalOnly) {
      var dataObjArr, dataOnlyArr, i;
      i = void 0;
      dataObjArr = this.getSurveyDataArr(finalOnly);
      dataOnlyArr = [];
      i = 0;
      while (i < dataObjArr.length) {
        dataOnlyArr.push(dataObjArr[i].data);
        i++;
      }
      if (dataOnlyArr.length > 0) {
        return "<exported>" + dataOnlyArr.join("") + "</exported>";
      } else {
        return null;
      }
    };

    StorageLocal.prototype.getCounterValue = function() {
      var number, numberStr, record;
      record = this.getRecord("__counter");
      number = (record && typeof record["counter"] !== "undefined" && isNumber(record["counter"]) ? Number(record["counter"]) : 0);
      numberStr = (number + 1).toString().pad(4);
      return numberStr;
    };

    return StorageLocal;

  })();

  isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  Settings = (function() {
    var getOne;

    function Settings() {}

    Settings.prototype.init = function() {
      var settings;
      settings = this.get();
      return $(document).trigger("setsettings", settings);
    };

    Settings.prototype.get = function() {
      return store.getRecord("__settings") || DEFAULT_SETTINGS;
    };

    getOne = function(setting) {
      var settings;
      settings = store.getRecord("__settings") || DEFAULT_SETTINGS;
      if (typeof setting !== "undefined" && typeof settings[setting] !== "undefined") {
        return settings[setting];
      } else {
        return null;
      }
    };

    Settings.prototype.set = function(setting, value) {
      "use strict";

      var result, settings;
      result = void 0;
      settings = this.get();
      console.debug("going to store setting: " + setting + " with value:" + value);
      settings[setting] = value;
      result = store.setRecord("__settings", settings);
      if (typeof this[setting] !== "undefined") {
        this[setting](value);
      }
      if (result === "success") {
        return true;
      } else {
        return console.error("error storing settings");
      }
    };

    return Settings;

  })();

  window.StorageLocal = StorageLocal;

  window.Settings = Settings;

}).call(this);

/*
 * Copyright (C) 2013 Project Hatohol
 *
 * This file is part of Hatohol.
 *
 * Hatohol is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * Hatohol is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hatohol. If not, see <http://www.gnu.org/licenses/>.
 */

Array.prototype.uniq = function() {
  var o = {}, i, len = this.length, r = [];
  for (i = 0; i < len; ++i) o[this[i]] = true;
  for (i in o) r.push(i);
  return r;
};


var status_choices   = [ '正常', '障害', '不明' ];
var severity_choices = [ '未分類', '情報', '警告', '軽度の障害', '重度の障害', '致命的な障害' ];

exports.status_choices   = function() { return status_choices; };
exports.severity_choices = function() { return severity_choices; };


exports.padDigit = function (val, len) {
  s = "00000000" + val;
  return s.substr(-len);
};

exports.formatDate = function (str) {
  var val = new Date();
  val.setTime(Number(str) * 1000);
  var d = val.getFullYear() + "/" + exports.padDigit(val.getMonth() + 1, 2) + "/" + exports.padDigit(val.getDate(), 2);
  var t = exports.padDigit(val.getHours(), 2) + ":" + exports.padDigit(val.getMinutes(), 2) + ":" + exports.padDigit(val.getSeconds(), 2);
  return d + " " + t;
};

exports.formatSecond = function (sec) {
  var t = exports.padDigit(parseInt(sec / 3600), 2) + ":" + exports.padDigit(parseInt(sec / 60) % 60, 2) + ":" + exports.padDigit(sec % 60, 2);
  return t;
};

exports.setCandidate = function (target, list) {
  var x;
  var s;

  for (x = 0; x < list.length; ++x) {
    s += "<option>" + list[x] + "</option>";
  }
  target.append(s);
};

exports.buildChooser = function () {
  var targets = [
    "#select-server",
    "#select-group",
    "#select-host",
    "#select-application",
  ];

  var klass = "";
  var x;
  var s;

  for (x = 0; x < targets.length; ++x) {
    s = $(targets[x]).val();
    if ( "undefined" != typeof s && "---------" != s ) {
      klass = klass + "." + s;
    }
  }

  return klass;
};

exports.chooseRow = function () {
  var klass = buildChooser();

  $("#table tbody tr").css("display", "");
  if ( "" != klass ) {
    $("#table tbody tr:not(" + klass + ")").css("display", "none");
  }
};

exports.chooseColumn = function () {
  var klass = buildChooser();

  $("#table td").css("display", "");
  if ( "" != klass ) {
    $("#table td:not(" + klass + ")").css("display", "none");
  }
};

exports.setStatus = function (value) {
  var elem;
  var x;
  var s;

  if ( "class" in value ) {
    $("#sts button").attr("class", "btn dropdown-toggle btn-" + value["class"]);
  }

  if ( "label" in value ) {
    elem = $("#sts button span:first");
    elem.empty();
    elem.append(value["label"]);
  }

  if ( "lines" in value ) {
    s = "";
    for (x = 0; x < value["lines"].length; ++x) {
      s += "<li>" + value["lines"][x] + "</li>";
    }

    elem = $("#sts ul");
    elem.empty();
    elem.append(s);
  }
};

exports.update = function (param) {
  exports.setStatus({
    "class" : "warning",
    "label" : "DRAW",
    "lines" : [ "描画中" ],
  });

  updateCore(param);

  exports.setStatus({
    "class" : "success",
    "label" : "DONE",
    "lines" : [],
  });
};

exports.schedule = function (timer, table, param) {
  setTimeout(function() {
    exports.setStatus({
      "class" : "warning",
      "label" : "LOAD",
      "lines" : [ "バックエンドと通信中" ],
    });

    $.getJSON("/asura/" + table + ".json", function(json) {
      rawData = json;
      exports.update(param);
    });
  }, timer);
};

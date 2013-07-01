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

if ( "undefined" == typeof lib ) {
  var lib = require("../static/js/library");
}

exports.parseData = function (rd) {
  var pd = new Object();
  var x;
  var o;
  var ss, as;
  var s;

  ss = [];
  as = [];
  for (x = 0; x < rd["items"].length; ++x) {
    o = rd["items"][x];
    ss.push(rd["servers"][o["serverId"]]["name"]);
    if ( 0 == o["itemGroupName"].length ) {
      o["itemGroupName"] = "_non_";
    }
    else {
      as.push(o["itemGroupName"]);
    }
  }
  pd.servers = ss.uniq().sort();
  pd.applis  = as.uniq().sort();

  return pd;
}

exports.drawTableBody = function (rd) {
  var x;
  var s;
  var o;
  var klass, server, host, clock, appli;

  s = "";
  for (x = 0; x < rd["items"].length; ++x) {
    o = rd["items"][x];
    server = rd["servers"][o["serverId"]]["name"];
    host   = o["hostId"]; // rd["servers"][o["serverId"]]["hosts"][o["hostId"]]["name"];  ITS NOT IMPLEMENTED YET
    clock  = o["lastValueTime"];
    appli  = o["itemGroupName"];
    klass  = server + " " + appli;
    s += "<tr class='" + klass + "'>";
    s += "<td>" + server + "</td>";
    s += "<td>" + host + "</td>";
    s += "<td>" + appli + "</td>";
    s += "<td>" + o["brief"] + "</td>";
    s += "<td data-sort-value='" + clock + "'>" + lib.formatDate(clock) + "</td>";
    s += "<td>" + o["lastValue"] + "</td>";
    s += "<td>" + o["prevValue"] + "</td>";
    s += "</tr>";
  }

  return s;
}

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
  var ss, hs;
  var s;

  ss = [];
  hs = [];
  for (x= 0; x < rd["triggers"].length; ++x) {
    o = rd["triggers"][x];
    ss.push(rd["servers"][o["serverId"]]["name"]);
    hs.push(rd["servers"][o["serverId"]]["hosts"][o["hostId"]]["name"]);
  }
  pd.servers = ss.uniq().sort();
  pd.hosts   = hs.uniq().sort();

  return pd;
}

exports.drawTableBody = function (rd) {
  var x;
  var s;
  var o;
  var klass, server, host, clock, status, severity;

  s = "";
  for (x = 0; x < rd["triggers"].length; ++x) {
    o = rd["triggers"][x];
    server   = rd["servers"][o["serverId"]]["name"];
    host     = rd["servers"][o["serverId"]]["hosts"][o["hostId"]]["name"];
    clock    = o["lastChangeTime"];
    status   = o["status"];
    severity = o["severity"];
    klass    = server + " " + host;
    s += "<tr class='" + klass + "'>";
    s += "<td>" + server + "</td>";
    s += "<td class='severity" + severity + "' data-sort-value='" + severity + "'>" + lib.severity_choices()[Number(severity)] + "</td>";
    s += "<td class='status" + status + "' data-sort-value='" + status + "'>" + lib.status_choices()[Number(status)] + "</td>";
    s += "<td data-sort-value='" + clock + "'>" + lib.formatDate(clock) + "</td>";
    s += "<td>" + "unsupported" + "</td>";
    s += "<td>" + "unsupported" + "</td>";
    s += "<td>" + host + "</td>";
    s += "<td>" + o["brief"] + "</td>";
    s += "<td>" + "unsupported" + "</td>";
    s += "</tr>";
  }

  return s;
}

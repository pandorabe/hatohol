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

exports.drawTableBody = function (rd) {
  var x;
  var s;
  var o;
  var ip, anchor;

  s = "";
  for (x = 0; x < rd["servers"].length; ++x) {
    o = rd["servers"][x];
    ip = o["ipAddress"];
    anchor = "http://" + ip + "/zabbix";
    s += "<tr>";
    s += "<td>" + o["id"] + "</td>";
    s += "<td>" + o["type"]  + "</td>";
    s += "<td><a href='" + anchor + "'>" + o["hostName"]  + "</td>";
    s += "<td><a href='" + anchor + "'>" + ip + "</a></td>";
    s += "<td>" + o["nickname"]  + "</td>";
    s += "</tr>";
  }

  return s;
}

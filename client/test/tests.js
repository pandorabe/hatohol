#!/usr/bin/env tea

var assert = require('assert');

// module library
var library = require("../static/js/library");

exports["test padDigit"] = function() {
  assert.equal(library.padDigit(  0, 1),         "0");
  assert.equal(library.padDigit(  1, 1),         "1");
  assert.equal(library.padDigit(  1, 2),        "01");
  assert.equal(library.padDigit(  9, 9), "000000009");
  assert.equal(library.padDigit(123, 3),       "123");
  assert.equal(library.padDigit(123, 2),        "23");
  assert.equal(library.padDigit(123, 4),      "0123");
};

exports["test formatDate"] = function() {
  assert.equal(library.formatDate(         0), "1970/01/01 09:00:00");
  assert.equal(library.formatDate(1356998400), "2013/01/01 09:00:00");
  assert.equal(library.formatDate(1356980400), "2013/01/01 04:00:00");
  assert.equal(library.formatDate(1356994800), "2013/01/01 08:00:00");
  assert.equal(library.formatDate(1357009200), "2013/01/01 12:00:00");
  assert.equal(library.formatDate(1357023600), "2013/01/01 16:00:00");
  assert.equal(library.formatDate(1357038000), "2013/01/01 20:00:00");
  assert.equal(library.formatDate(1357052400), "2013/01/02 00:00:00");
  assert.equal(library.formatDate(1370511901), "2013/06/06 18:45:01");
};


// module overview_triggers_ajax
var overview_triggers_ajax = require("../viewer/overview_triggers_ajax");

exports["test overview_triggers_ajax.parseData"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.deepEqual(overview_triggers_ajax.parseData(fixtures[i].raw), fixtures[i].parsed);
  }
};

exports["test overview_triggers_ajax.drawTableHeader"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(overview_triggers_ajax.drawTableHeader(fixtures[i].raw), fixtures[i].drawn);
  }
};

exports["test overview_triggers_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(overview_triggers_ajax.drawTableBody(fixtures[i].raw), fixtures[i].drawn);
  }
};


// module overview_items_ajax
var overview_items_ajax = require("../viewer/overview_items_ajax");

exports["test overview_items_ajax.parseData"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.deepEqual(overview_items_ajax.parseData(fixtures[i].raw), fixtures[i].parsed);
  }
};

exports["test overview_items_ajax.drawTableHeader"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(overview_items_ajax.drawTableHeader(fixtures[i].raw), fixtures[i].drawn);
  }
};

exports["test overview_items_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(overview_items_ajax.drawTableBody(fixtures[i].raw), fixtures[i].drawn);
  }
};


// module latest_ajax
var latest_ajax = require("../viewer/latest_ajax");

exports["test latest_ajax.parseData"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.deepEqual(latest_ajax.parseData(fixtures[i].raw), fixtures[i].parsed);
  }
};

exports["test latest_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(latest_ajax.drawTableBody(fixtures[i].raw), fixtures[i].drawn);
  }
};


// module triggers_ajax
var triggers_ajax = require("../viewer/triggers_ajax");

exports["test triggers_ajax.parseData"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.deepEqual(triggers_ajax.parseData(fixtures[i].raw), fixtures[i].parsed);
  }
};

exports["test triggers_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(triggers_ajax.drawTableBody(fixtures[i].raw), fixtures[i].drawn);
  }
};


// module events_ajax
var events_ajax = require("../viewer/events_ajax");

exports["test events_ajax.parseData"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.deepEqual(events_ajax.parseData(fixtures[i].raw), fixtures[i].parsed);
  }
};

exports["test events_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(events_ajax.drawTableBody(fixtures[i].raw, fixtures[i].parsed), fixtures[i].drawn);
  }
};


// module servers_ajax
var servers_ajax = require("../viewer/servers_ajax");

exports["test servers_ajax.drawTableBody"] = function() {
  var fixtures = [
  ];

  for (var i = 0; i < fixtures.length; ++i) {
    assert.equal(servers_ajax.drawTableBody(fixtures[i].raw, fixtures[i].parsed), fixtures[i].drawn);
  }
};


/*######################################
# run myself
######################################*/

if ( module === require.main ) {
  require("test").run(exports);
}

if WITH_JS_TEST

TARGET_FILES = \
	node_modules \
	browser/mocha.js browser/mocha.css browser/expect.js browser/sinon.js

noinst_DATA = $(TARGET_FILES)
endif

node_modules:
	ln -s `npm root -g`

browser/mocha.js:
	ln -s ../node_modules/mocha/mocha.js $@

browser/mocha.css:
	ln -s ../node_modules/mocha/mocha.css $@

browser/expect.js:
	ln -s ../node_modules/expect.js/index.js $@

browser/sinon.js:
	ln -s ../node_modules/sinon/pkg/sinon.js $@

clean-local:
	-rm -fr $(TARGET_FILES)

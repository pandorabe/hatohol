TEST_DBS = testDatabase-hatohol.db
if WITH_CUTTER
noinst_DATA = $(TEST_DBS) FooTable.db
noinst_PROGRAMS = mkTestDB
endif

noinst_SCRIPTS = mkFooTable.sh

AM_CXXFLAGS = -g3 -Wall -I .. -I ../../src $(GLIB_CFLAGS) $(MLPL_CFLAGS)
LIBS = ../../src/libhatohol.la ../libTest.la

mkTestDB_SOURCES = mkTestDB.cc
mkTestDB_LDADD = $(LIBS)

$(TEST_DBS): mkTestDB ../../src/libhatohol.la ../libTest.la
testDatabase-hatohol.db:
	rm -f $@
	./mkTestDB hatohol $@

FooTable.db: mkFooTable.sh
	rm -f $@
	./mkFooTable.sh $@

EXTRA_DIST= \
	$(noinst_SCRIPTS) \
	testJson01.json \
	testJson02.json \
	testJson03.json \
	testJson04.json \
	testJson05.json \
	testJson06.json \
	zabbix-api-res-applications-003.json \
	zabbix-api-res-events-002.json \
	zabbix-api-res-hosts-001.json \
	zabbix-api-res-items-001.json \
	zabbix-api-res-items-003.json \
	zabbix-api-res-login-001.json \
	zabbix-api-res-triggers-001.json \
	zabbix-api-res-triggers-003-hosts.json \
	zabbix-api-res-hostgroup-001.json \
	zabbix-api-res-hostgroup-002-refer.json

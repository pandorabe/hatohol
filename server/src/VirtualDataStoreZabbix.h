/*
 * Copyright (C) 2013-2014 Project Hatohol
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

#ifndef VirtualDataStoreZabbix_h
#define VirtualDataStoreZabbix_h

#include <map>
#include <MutexLock.h>
#include <ReadWriteLock.h>
#include <glib.h>
#include "ItemTablePtr.h"
#include "VirtualDataStore.h"
#include "DataStoreZabbix.h"
#include "DataStoreManager.h"

class VirtualDataStoreZabbix : public VirtualDataStore
{
public:
	VirtualDataStoreZabbix(void);
	virtual ~VirtualDataStoreZabbix();

	// TODO: a consider const qualifier should be added again
	ItemTablePtr getItemTable(ItemGroupId groupId);

protected:
	virtual DataStore *createDataStore(
	  const MonitoringServerInfo &svInfo,
	  const bool &autoRun = true); // override

	ItemTable *createStaticItemTable(ItemGroupId groupId);
	ItemTablePtr getTriggers(void);
	ItemTablePtr getFunctions(void);
	ItemTablePtr getItems(void);
	ItemTablePtr getHosts(void);

private:
	typedef ItemTablePtr (VirtualDataStoreZabbix::*DataGenerator)(void);
	typedef std::map<ItemGroupId, DataGenerator> DataGeneratorMap;
	typedef DataGeneratorMap::iterator           DataGeneratorMapIterator;

	ItemGroupIdTableMap m_staticItemTableMap;
	mlpl::ReadWriteLock m_staticItemTableMapLock;

	DataGeneratorMap    m_dataGeneratorMap;

	void registerProfiles(ItemTable *table);
};

#endif // VirtualDataStoreZabbix_h

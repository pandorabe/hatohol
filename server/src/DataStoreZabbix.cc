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

#include <cstdio>
#include "DataStoreZabbix.h"
using namespace std;

// ---------------------------------------------------------------------------
// Public methods
// ---------------------------------------------------------------------------
DataStoreZabbix::DataStoreZabbix(
  const MonitoringServerInfo &serverInfo, const bool &autoStart)
: m_armApi(serverInfo)
{
	if (autoStart)
		m_armApi.start();
}

DataStoreZabbix::~DataStoreZabbix(void)
{
}

ArmBase &DataStoreZabbix::getArmBase(void)
{
	return m_armApi;
}

ItemTablePtr DataStoreZabbix::getTriggers(void)
{
	return m_armApi.getTrigger();
}

ItemTablePtr DataStoreZabbix::getFunctions(void)
{
	return m_armApi.getFunctions();
}

ItemTablePtr DataStoreZabbix::getItems(void)
{
	return m_armApi.getItems();
}

ItemTablePtr DataStoreZabbix::getHosts(void)
{
	ItemTablePtr hostsTablePtr, hostsGroupsTablePtr;
	m_armApi.getHosts(hostsTablePtr, hostsGroupsTablePtr);
	return hostsTablePtr;
}

void DataStoreZabbix::setCopyOnDemandEnable(bool enable)
{
	m_armApi.setCopyOnDemandEnabled(enable);
}
// ---------------------------------------------------------------------------
// Protected methods
// ---------------------------------------------------------------------------

/*
 * Copyright (C) 2014 Project Hatohol
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

#include <stdexcept>
#include <MutexLock.h>
#include "VirtualDataStoreFake.h"
#include "DataStoreFake.h"

using namespace mlpl;

struct VirtualDataStoreFake::PrivateContext
{
};

// ---------------------------------------------------------------------------
// Public methods
// ---------------------------------------------------------------------------
VirtualDataStoreFake::VirtualDataStoreFake(void)
: VirtualDataStore(MONITORING_SYSTEM_FAKE),
  m_ctx(NULL)
{
	m_ctx = new PrivateContext();
}

VirtualDataStoreFake::~VirtualDataStoreFake()
{
	if (m_ctx)
		delete m_ctx;
}

// ---------------------------------------------------------------------------
// Protected methods
// ---------------------------------------------------------------------------
DataStore *VirtualDataStoreFake::createDataStore(
  const MonitoringServerInfo &svInfo, const bool &autoRun)
{
	return new DataStoreFake(svInfo, autoRun);
}


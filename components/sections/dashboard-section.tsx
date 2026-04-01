'use client';

import { useState } from 'react';

import { Sidebar } from '@/components/layout/sidebar';
import { Navbar } from '@/components/layout/navbar';

import { KPICards } from '@/components/kpi-cards';
import { AlertsSection } from '@/components/alerts-section';
import { WeeklyRevenueChart } from '@/components/charts/weekly-revenue-chart';
import { LiveOrdersTable } from '@/components/tables/live-orders-table';

import { AnalyticsSection } from './analytics-section';
import { CustomersSection } from './customers-section';
import { StaffSection } from './staff-section';
import { SettingsSection } from './settings-section';
import { MenuPlannerSection } from './menu-planner-section';
import { RouteOptimizerSection } from './route-optimizer-section';

export function DashboardSection() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const renderSection = () => {
    switch (activeSection) {
      case 'analytics':
        return <AnalyticsSection />;
      case 'customers':
        return <CustomersSection />;
      case 'staff':
        return <StaffSection />;
      case 'settings':
        return <SettingsSection />;
        case 'menu-planner':  
    return <MenuPlannerSection />;

  case 'route-optimizer':   
    return <RouteOptimizerSection />;
      default:
        return (
          <>
           

            <KPICards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WeeklyRevenueChart />
              <AlertsSection />
            </div>

            <LiveOrdersTable searchQuery={searchQuery} />
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Right side */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Content */}
        <main className="p-4">
          {renderSection()}
        </main>

      </div>
    </div>
  );
}
'use client';

import { KPICards } from '@/components/kpi-cards';
import { AlertsSection } from '@/components/alerts-section';
import { WeeklyRevenueChart } from '@/components/charts/weekly-revenue-chart';
import { LiveOrdersTable } from '@/components/tables/live-orders-table';

interface DashboardSectionProps {
  searchQuery?: string;
}

export function DashboardSection({ searchQuery = '' }: DashboardSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>

      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyRevenueChart />
        <AlertsSection />
      </div>

      <LiveOrdersTable searchQuery={searchQuery} />
    </div>
  );
}
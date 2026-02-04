'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Navbar } from '@/components/layout/navbar';
import { Sidebar } from '@/components/layout/sidebar';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { MenuPlannerSection } from '@/components/sections/menu-planner-section';
import { RouteOptimizerSection } from '@/components/sections/route-optimizer-section';
import { AnalyticsSection } from '@/components/sections/analytics-section';
import { CustomersSection } from '@/components/sections/customers-section';
import { StaffSection } from '@/components/sections/staff-section';
import { SettingsSection } from '@/components/sections/settings-section';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check authentication only once on mount
    const authenticated = localStorage.getItem('isAuthenticated');
    if (!authenticated) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection searchQuery={searchQuery} />;
      case 'menu-planner':
        return <MenuPlannerSection searchQuery={searchQuery} />;
      case 'route-optimizer':
        return <RouteOptimizerSection searchQuery={searchQuery} />;
      case 'analytics':
        return <AnalyticsSection searchQuery={searchQuery} />;
      case 'customers':
        return <CustomersSection searchQuery={searchQuery} />;
      case 'staff':
        return <StaffSection searchQuery={searchQuery} />;
      case 'settings':
        return <SettingsSection searchQuery={searchQuery} />;
      default:
        return <DashboardSection searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
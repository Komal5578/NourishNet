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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

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
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Navbar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
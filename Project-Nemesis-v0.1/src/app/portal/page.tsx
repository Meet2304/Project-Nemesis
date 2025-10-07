'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  Home,
  Briefcase,
  FolderOpen,
  Calendar,
  BarChart3,
  Mail,
  Settings,
  User,
  FileText,
  LogOut,
  GalleryVerticalEnd,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

/**
 * Portal Page
 * Protected dashboard for authenticated users with sidebar navigation
 */
export default function Portal() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // Protect route - redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  // Show loading while checking authentication
  if (!isAuthenticated) {
    return null;
  }

  // Navigation items for the sidebar
  const navigationItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/portal",
      isActive: true,
    },
    {
      title: "Cases",
      icon: Briefcase,
      url: "/portal/cases",
    },
    {
      title: "Documents",
      icon: FolderOpen,
      url: "/portal/documents",
    },
    {
      title: "Calendar",
      icon: Calendar,
      url: "/portal/calendar",
    },
    {
      title: "Reports",
      icon: BarChart3,
      url: "/portal/reports",
    },
    {
      title: "Messages",
      icon: Mail,
      url: "/portal/messages",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-judicial-navy text-judicial-gold">
                      <GalleryVerticalEnd className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Project Nemesis</span>
                      <span className="text-xs">Judicial Management</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/portal/profile">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/portal/settings">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">{user?.name}</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                    <span className="text-xs text-muted-foreground capitalize">{user?.role}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-judicial-navy mb-2">
                Welcome back, {user?.name}
              </h2>
              <p className="text-gray-600">
                Here's an overview of your judicial management activities
              </p>
            </div>

            {/* Dashboard Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* My Cases */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">My Cases</h3>
                </div>
                <p className="text-gray-600 mb-4">View and manage your assigned cases</p>
                <div className="text-3xl font-bold text-judicial-gold">12</div>
                <p className="text-sm text-gray-500">Active cases</p>
              </div>

              {/* Documents */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <FolderOpen className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">Documents</h3>
                </div>
                <p className="text-gray-600 mb-4">Access your document repository</p>
                <div className="text-3xl font-bold text-judicial-gold">48</div>
                <p className="text-sm text-gray-500">Total documents</p>
              </div>

              {/* Schedule */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">Schedule</h3>
                </div>
                <p className="text-gray-600 mb-4">View your hearing schedule</p>
                <div className="text-3xl font-bold text-judicial-gold">5</div>
                <p className="text-sm text-gray-500">Upcoming hearings</p>
              </div>

              {/* Messages */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">Messages</h3>
                </div>
                <p className="text-gray-600 mb-4">Check your notifications</p>
                <div className="text-3xl font-bold text-judicial-gold">3</div>
                <p className="text-sm text-gray-500">Unread messages</p>
              </div>

              {/* Reports */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">Reports</h3>
                </div>
                <p className="text-gray-600 mb-4">Generate and view reports</p>
                <div className="text-3xl font-bold text-judicial-gold">7</div>
                <p className="text-sm text-gray-500">Available reports</p>
              </div>

              {/* Settings */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-judicial-navy rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-judicial-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-judicial-navy">Settings</h3>
                </div>
                <p className="text-gray-600 mb-4">Manage your account settings</p>
                <button className="text-judicial-gold hover:text-judicial-navy font-medium">
                  Configure →
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-judicial-navy mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-judicial-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-judicial-navy" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-judicial-navy">New document uploaded</p>
                    <p className="text-sm text-gray-600">Case #2024-001 - Evidence submitted</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-judicial-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-judicial-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-judicial-navy">Hearing scheduled</p>
                    <p className="text-sm text-gray-600">Case #2024-003 - January 15, 2024</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-judicial-navy">Case assigned</p>
                    <p className="text-sm text-gray-600">New case #2024-005 assigned to you</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-judicial-navy mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-judicial-navy text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium">
                  File New Case
                </button>
                <button className="bg-judicial-gold text-judicial-navy px-6 py-3 rounded-md hover:bg-yellow-500 transition-all duration-300 font-medium">
                  Upload Document
                </button>
                <button className="border-2 border-judicial-navy text-judicial-navy px-6 py-3 rounded-md hover:bg-judicial-navy hover:text-white transition-all duration-300 font-medium">
                  Schedule Hearing
                </button>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

"use client"

import * as React from 'react';
import NavBar from '@/components/common/navbar';
import BottomNavigation from '@/components/common/bottom-navigation';
import BottomNavbar from '@/components/common/bottom-navbar';
import AuthProvider from '@/context/AuthContext';
import { Metadata } from "next";
import { AppProvider } from '@/context/AppContext';

const metadata: Metadata = {
  title: { absolute: "Cash Waqf", template: "%s | an Islamic endowment" },
  description: "It provide different waqf-funded causes to support",
  viewport: {
    width: "device-width",
    initialScale: 1.0
  },
  keywords: ["waqf", "endowment", 'Islamic endowment', 'awqaf', 'cash waqf'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body>
        <AuthProvider>
          <AppProvider>
            <NavBar />
            {children}
          </AppProvider>
          <BottomNavigation />
          <BottomNavbar />
        </AuthProvider>
      </body>
    </html>
  );
}

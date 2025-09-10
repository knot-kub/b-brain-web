import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { HttpClient } from '@/http/http.client';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // instantiate HttpClient singleton
  HttpClient.instantiate({
    private: {
      host: process.env.API_BASE_URL || 'http://localhost:8080',
      timeout: 10000,
      interceptorOptions: {
        request: {
          tokenHandler: () => localStorage.getItem('token') || '',
        },
        response: {},
      },
    },
    public: {
      host: process.env.API_BASE_URL || 'http://localhost:8080',
      timeout: 10000,
      interceptorOptions: {
        request: {},
        response: {},
      },
    },
  })

  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

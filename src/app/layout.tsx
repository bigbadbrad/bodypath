// /app/layout.tsx
import * as React from 'react';
import type { Viewport, Metadata } from 'next';

import '@/styles/global.css';
import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { GoogleAnalytics } from '@/utils/GoogleAnalytics';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

export const metadata: Metadata = {
  metadataBase: new URL('https://springride.org'),
  alternates: {
    canonical: 'https://springride.org',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://springride.org',
    siteName: 'Spring Ride — The Mounted Patrol SMC',
    images: [
      {
        url: '/spring-ride-pin.png',
        alt: 'Spring Ride — Lucky Star Ranch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/spring-ride-pin.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'SpaceGTM',
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </ThemeProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

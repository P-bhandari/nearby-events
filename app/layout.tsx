import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nearby Events — Your week, planned',
  description: 'A weekly date-night planner for Brooklyn and Manhattan.',
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Nearby Events',
    description: 'Your week, planned. Date-night picks for Brooklyn and Manhattan.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearby Events',
    description: 'Your week, planned. Date-night picks for Brooklyn and Manhattan.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

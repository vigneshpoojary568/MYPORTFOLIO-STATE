import type { Metadata } from 'next';
import './globals.css';
import { portfolioConfig } from '@/data/portfolioConfig';

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} — Portfolio | Developer & Python Enthusiast`,
  description: `Portfolio of ${portfolioConfig.personal.name} — web developer creating clean, modern websites and exploring Python & Data Analytics.`,
  openGraph: {
    title: `${portfolioConfig.personal.name} — Portfolio`,
    description: `Portfolio of ${portfolioConfig.personal.name} — web developer creating clean, modern websites and exploring Python & Data Analytics.`,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070c18] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

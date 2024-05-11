import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <meta name="google-site-verification" content="oeEXoOctvy8qWUekXG1tiTitkCbGPthTRmdIfiLEdtg" />
        {children}
      <Analytics/>
<SpeedInsights/>




      </body>
    </html>
  );
}

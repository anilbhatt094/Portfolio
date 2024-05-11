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
      <meta name="google-site-verification" content="_hDsvS-x5GhYN8aT8uI8Uh_3MsDFVszbpMK76ugNYJI" /> 
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-M7VQ16VBF3"></script>
        {children}
      <Analytics/>
<SpeedInsights/>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNH47JPV"height="0" width="0"></iframe></noscript>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-M7VQ16VBF3"></Script>



      </body>
    </html>
  );
}

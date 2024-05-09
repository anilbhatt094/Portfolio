import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Google Search Console',
  description: 'description of site here',
  verification: {
    google: '_hDsvS-x5GhYN8aT8uI8Uh_3MsDFVszbpMK76ugNYJI',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}
      <Analytics/>
<SpeedInsights/>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNH47JPV"height="0" width="0"></iframe></noscript>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-M7VQ16VBF3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-M7VQ16VBF3');
</script>

      </body>
    </html>
  );
}

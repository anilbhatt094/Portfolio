import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <title>Hi 🖐 I am Anil Bhatt | Frontend Developer</title>
      <body className={inter.className}>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M7VQ16VBF3"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
          `}
        </Script>
      <meta name="google-site-verification" content="oeEXoOctvy8qWUekXG1tiTitkCbGPthTRmdIfiLEdtg" />
        {children}
      <Analytics/>
<SpeedInsights/>




      </body>
    </html>
  );
}

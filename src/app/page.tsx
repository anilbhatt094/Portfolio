import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '../component/Header';
import Footer from '../component/Footer';
import Home from '../pages/Home';
function page() {
  return (
    <>
<Analytics/>
<SpeedInsights/>
  <Header/>
    <Home/>
  <Footer/>
    </>
  )
}

export default page
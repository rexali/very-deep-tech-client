"use client"

import { useMediaQuery } from "react-responsive";
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './marketing-message';
import CreateSupport from './create-support';
import FAQHowItWorks from './faq-how-it-work';
import Copyright from '@/components/common/copyright';
import Testimonials from './testimonials';
import Portfolios from './portfolios';
import Team from './team';
import Partners from './partners';
import React from 'react';
import SubscribeNewsletter from './subscribe-newsletter';

export default function HomePage() {

  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

  return (
    <main>
      {/* <CssBaseline /> */}
      {/* <div style={{ marginRight: "auto", marginLeft: 'auto', marginTop: 70, textAlign: 'center' }}>
        {isMobile && <SearchItem />}
      </div> */}
      <MarketingMessage />
      <CreateSupport />
      {/* <FeaturedWaqfs /> */}
      <FAQHowItWorks />
      <Testimonials />
      <Portfolios />
      <Team />
      <Partners />
      <SubscribeNewsletter />
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </main>
  );
}
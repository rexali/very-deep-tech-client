"use client"

import { useMediaQuery } from "react-responsive";
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './MarketingMessage';
import FAQHowItWorks from './FAQHowItWorks';
import Copyright from '@/components/common/copyright';
import Testimonials from './testimonials';
import Portfolios from './portfolios';
import Team from './team';
import Partners from './partners';
import React from 'react';
import SearchInput from "../search/SearchInput";
import FeaturedProducts from "./FeaturedProducts";
import CreateSubscription from "../subscriptions/CreateSubscription";

export default function HomePage() {
  // const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  return (
    <main>
      {/* <CssBaseline /> */}
      <SearchInput />
      <MarketingMessage /> <br /><br />
      <FeaturedProducts title={'Featured'} />
      <FAQHowItWorks />
      <Testimonials />
      <Portfolios />
      <Team />
      <Partners />
      <CreateSubscription />
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </main>
  );
}
"use client"

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './MarketingMessage';
import FAQHowItWorks from './FAQHowItWorks';
import Copyright from '@/components/common/copyright';
import SearchInput from "../search/SearchInput";
import FeaturedProducts from "./FeaturedProducts";
import CreateSubscription from "../subscriptions/CreateSubscription";
// import Partners from "./Partners";
// import Portfolios from "./Portfolios";
// import Team from "./Team";
// import Testimonials from "./Testimonials";
import { useMediaQuery } from "react-responsive";
import Testimonials from './Testimonials';
import Portfolios from './Portfolios';
import Team from './Team';
import Partners from './Partners';

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
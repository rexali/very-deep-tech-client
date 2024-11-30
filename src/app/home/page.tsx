"use client"

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './MarketingMessage';
import FAQHowItWorks from './FAQHowItWorks';
import Copyright from '@/components/common/copyright';
import SearchInput from "../search/SearchInput";
import CreateSubscription from "../subscriptions/CreateSubscription";
import { useMediaQuery } from "react-responsive";
import Testimonials from './testimonials';
import Portfolios from './portfolios';
import Team from './team';
import Partners from './partners';
import FeaturedProducts from '../products/FeaturedProducts';
import PopularProducts from '../products/PopularProducts';
import HomeProductCategories from '../products/HomeProductCategories';
import ProductCategories from '../products/ProductCategory';

export default function HomePage() {
  // const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  return (
    <main> 
      {/* <CssBaseline /> */}
      <SearchInput />
      <MarketingMessage /> <br /><br />
      {/* <HomeProductCategories /> */}
      <ProductCategories />
      <FeaturedProducts />
      <PopularProducts />
      <Testimonials />
      <Portfolios />
      <Team />
      <FAQHowItWorks />
      <Partners />
      <CreateSubscription />
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </main>
  );
}
'use client'

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
import HomeProductCategories from '../products/HomeProductCategories';
import FeaturedProducts from '../products/FeaturedProducts';
import PopularProducts from '../products/PopularProducts';
import Link from 'next/link';
import Box from '@mui/material/Box';

export default function HomePage(props: any) {
  // const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  let products = props.products ?? []

  return (
    <main>
      {/* <CssBaseline /> */}
      <SearchInput />
      <MarketingMessage /> <br /><br />
      <HomeProductCategories products={products} />
      <FeaturedProducts products={products} />
      <Box margin={2} padding={2} display={"flex"} justifyContent={'center'}>
        <Link
          style={{ textDecoration: "none", color: 'green' }}
          type="button"
          color="success"
          href={`/products`}
        >
          View all
        </Link>
      </Box>
      <Testimonials />
      <Portfolios />
      <Team />
      <PopularProducts products={products} />
      <Box marginTop={2} padding={2} display={"flex"} justifyContent={'center'}>
        <Link
          style={{ textDecoration: "none", color: 'green' }}
          type="button"
          color="success"
          href={`/products`}
        >
          View all
        </Link>
      </Box>
      <FAQHowItWorks />
      <Partners />
      <CreateSubscription />
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </main>
  );
}
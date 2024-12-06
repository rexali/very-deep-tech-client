
// import * as React from "react";
// import HomePage from "./home/page";
// import { getProductsAPI } from "./products/api/getProductsAPI";
// import { getInitialDataAPI } from "./api/getInitialDataAPI";

// export default async function Page(props:any) {
//   // let initialData = await getInitialDataAPI() ?? {};
//   let products = await getProductsAPI() ?? [];
//   return (
//     <HomePage data={products} />
//   );
// }

// 'use client'

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './MarketingMessage';
import FAQHowItWorks from './FAQHowItWorks';
import Copyright from '@/components/common/copyright';
import SearchInput from "./search/SearchInput";
import CreateSubscription from "./subscriptions/CreateSubscription";
import { useMediaQuery } from "react-responsive";
import Testimonials from './testimonials';
import Portfolios from './portfolios';
import Team from './team';
import Partners from './partners';
import HomeProductCategories from './products/HomeProductCategories';
import FeaturedProducts from './products/FeaturedProducts';
import PopularProducts from './products/PopularProducts';
import Link from 'next/link';
import Box from '@mui/material/Box';
import RecommendedProducts from './products/RecommendedProducts';
import NewProducts from './products/NewProducts';
import { getInitialDataAPI } from './api/getInitialDataAPI';

export default async function HomePage() {
  // const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  
  let data = await getInitialDataAPI() ?? {};
  // let data = props.data ?? []

  return (
    <main>
      {/* <CssBaseline /> */}
      <SearchInput />
      <MarketingMessage /> <br /><br />
      {/* replace the productData with categoryData */}
      <HomeProductCategories products={data?.productData} />
      {/* replace the productData with featured Data */}
      <FeaturedProducts products={data?.productData} />
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
      <PopularProducts products={data?.popularData} />
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
      <RecommendedProducts />
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
      <NewProducts products={data?.productData} />
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
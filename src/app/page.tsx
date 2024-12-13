import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MarketingMessage from './MarketingMessage';
import FAQHowItWorks from './FAQHowItWorks';
import Copyright from '@/components/common/copyright';
import SearchInput from "./search/SearchInput";
import CreateSubscription from "./subscriptions/CreateSubscription";
import Testimonials from './testimonials';
import Portfolios from './portfolios';
import Team from './team';
import Partners from './partners';
import FeaturedProducts from './products/FeaturedProducts';
import PopularProducts from './products/PopularProducts';
import Link from 'next/link';
import Box from '@mui/material/Box';
import RecommendedProducts from './products/RecommendedProducts';
import NewProducts from './products/NewProducts';
import { getInitialDataAPI } from './api/getInitialDataAPI';
import ProductCategories from './products/ProductCategory';
// import { useMediaQuery } from "react-responsive";

export default async function AppPage() {
  // const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  let data;
  try {
    data = await getInitialDataAPI() ?? {};
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      {/* <CssBaseline /> */}
      <SearchInput /> <br />
      <ProductCategories categoryData={data?.categoryData} /> <br />
      <MarketingMessage /> <br />
      <FeaturedProducts products={data?.featuredData} />
      <Box margin={2} padding={2} display={"flex"} justifyContent={'center'}>
        <Link
          style={{ textDecoration: "none", color: 'green', borderColor: 'green' }}
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
          style={{ textDecoration: "none", color: 'green', borderColor: 'green' }}
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
          style={{ textDecoration: "none", color: 'green', borderColor: 'green' }}
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
          style={{ textDecoration: "none", color: 'green', borderColor: 'green' }}
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
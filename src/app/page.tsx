'use client'
import React, { useEffect } from 'react';
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
import ErrorBoundary from '@/components/ErrorBoundary';
import Container from '@mui/material/Container';
import DesktopProductCategories from './products/DesktopProductCategories';
import { useMediaQuery } from "react-responsive";
import FeaturedProductList from './products/FeaturedProductList';
import PopularProductList from './products/PopularProductList';
import NewProductList from './products/NewProductList';
import RecommendedProductList from './products/RecommendedProductList';

export default function AppPage() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  const [data, setData] = React.useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        let initData = await getInitialDataAPI() ?? {};
        setData(initData)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <ErrorBoundary>
      <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
        {/* <CssBaseline /> */}
        <SearchInput /> <br />
        <ProductCategories categoryData={data?.categoryData} />
        <MarketingMessage /> <br />
        <Box marginTop={4} display={"flex"} flexDirection={'row'} justifyContent={'space-between'} >
          <Box>
            {!isMobile && <DesktopProductCategories categoryData={data?.categoryData} />}
          </Box>
          <Box>
            {/* <FeaturedProducts products={data?.featuredData} /> */}
            <FeaturedProductList products={data?.featuredData} />
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
            <PopularProductList products={data?.popularData} />
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
            <RecommendedProductList />
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
            <NewProductList products={data?.productData} />
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
          </Box>
        </Box>
        <Testimonials />
        <Portfolios />
        <Team />
        <Partners />
        <FAQHowItWorks />
        <CreateSubscription />
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ErrorBoundary>
  );
}
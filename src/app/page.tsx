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
import Link from 'next/link';
import Box from '@mui/material/Box';
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
import useSWR from 'swr';
import { SERVER_URL } from '@/constants/url';

export default function AppPage() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  // const [data, setData] = React.useState<any>({});


  const fetchInitialData = async (url: string) => {
    try {
      let data = await fetch(url).then(res => res.json());
      if (data.data === null) {
        return {};
      }
      return data.data;
    } catch (error) {
      console.warn(error);
    }
  }
  
  const { data, error, isLoading } = useSWR(`${SERVER_URL}/products/${1}/initial`, fetchInitialData);


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let initData = await getInitialDataAPI() ?? {};
  //       setData(initData)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);


  return (
    <ErrorBoundary>
      <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
        {/* <CssBaseline /> */}
        {isMobile && <Box display={"flex"} justifyContent={'center'}><SearchInput /></Box>} <br />
        <ProductCategories categoryData={data?.categoryData} />
        <MarketingMessage /> <br />
        <Box marginTop={4} display={"flex"} flexDirection={'row'} justifyContent={'space-between'} >
          <Box>
            {!isMobile && <DesktopProductCategories categoryData={data?.categoryData} />}
          </Box>
          <Box>
            <Box>Featured</Box>
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
            <Box>Popular</Box>
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
            <Box>Recommended</Box>
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
            <Box>New</Box>
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
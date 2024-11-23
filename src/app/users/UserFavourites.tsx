'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserFavouritesAPI } from "../favourites/api/getUserFavouritesAPI";
import Box from "@mui/material/Box";

export default function UserFavourites() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";
  React.useEffect(() => {
    async function getData() {
      const products = await getUserFavouritesAPI(userId);
      setData(products);
    }

    getData();

  }, [userId]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item in your wish bag found</Box>
      </Container>
    )
  }
  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}
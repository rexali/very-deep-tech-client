'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "../carts/api/getUserCartsAPI";
import Box from "@mui/material/Box";

export default function UserCarts() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;
  React.useEffect(() => {
    async function getData() {
      const products = await getUserCartsAPI(userId);
      setData(products);
    }

    getData();
 
  }, [userId]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item in your cart found</Box>
      </Container>
    )
  }
  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

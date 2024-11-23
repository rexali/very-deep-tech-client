'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import Fallback from "@/components/common/fallback";
import { getUsersCartsAPI } from "./api/getUserCarts";
import Box from "@mui/material/Box";

export default function UsersProducts() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      const products = await getUsersCartsAPI(activePage);
      setData(products);
    }

    getData();

  }, [activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item(s) in cart</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <Box>Total Carts: {data[0]?.totalCarts}</Box>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

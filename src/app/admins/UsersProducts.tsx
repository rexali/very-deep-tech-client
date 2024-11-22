'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import Fallback from "@/components/common/fallback";
import { getUsersProductsAPI } from "./api/getUsersProductsAPI";
import Box from "@mui/material/Box";

export default function UsersProducts() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      const products = await getUsersProductsAPI(activePage);
      setData(products);
    }

    getData();

  }, [activePage]);

  if (!data.length) {

    return (
        <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Box textAlign={'center'}>No product(s) found</Box>
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

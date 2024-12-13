'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getUsersProductsAPI } from "./api/getUsersProductsAPI";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";

export default function UsersProducts() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      try {
        const products = await getUsersProductsAPI(activePage);
        setData(products);
      } catch (error) {
        console.log(error);
      }

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
    <Box sx={{ mt: 10 }}>
      <Box>Total Products: {data[0]?.totalProducts}</Box>
      <ProductList products={data} role={'admin'} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data[0]?.totalProducts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Box>
  )
}

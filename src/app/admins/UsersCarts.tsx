'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getUsersCartsAPI } from "./api/getUserCarts";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { useCarts } from "../carts/hooks/useCarts";
import { AppContext } from "@/context/AppContext";

export default function UsersProducts() {
  const [activePage, setActivePage] = React.useState(1);
  const {dispatch} = React.useContext(AppContext);
  const {carts} = useCarts(dispatch,activePage);

  if (!carts.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item(s) in cart</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <Box>Total Carts: {carts[0]?.totalCarts}</Box>
      <ProductList products={carts} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'}>
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={carts[0]?.totalCarts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}

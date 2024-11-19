'use client'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Add from "@material-ui/icons/Add";

import Container from "@mui/material/Container";
import Link from "next/link";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getUserProductsAPI } from "./api/getUserProductsAPI";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";

export default function UserProducts() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;
  
  React.useEffect(() => {
    async function getData() {
      const products = await getUserProductsAPI(userId, activePage);
      setData(products);
    }

    getData();

  }, [userId, activePage]);

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
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} role={'admin'}/>
      </React.Suspense>
    </Container>
  )
}

'use client'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Add from "@material-ui/icons/Add";

import Container from "@mui/material/Container";
import Link from "next/link";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUsersProductsAPI } from "./api/getUsersProductsAPI";

export default function UsersProducts() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;
  React.useEffect(() => {
    async function getData() {
      const products = await getUsersProductsAPI(activePage);
      setData(products);
    }

    getData();

  }, [userId]);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        Products<Link href={"/users/products/add"}><Button startIcon={<Add />}></Button></Link>
      </Box>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

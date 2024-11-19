'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import Fallback from "@/components/common/fallback";
import { getUsersProductsAPI } from "./api/getUsersProductsAPI";

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

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

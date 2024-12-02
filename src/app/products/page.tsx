'use client'

import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import ProductList from "./ProductList";
import ReactPagination from "@/components/react-pagination";
import { getProductsAPI } from "./api/getProductsAPI";
import { getProductCategories } from "./utils/getProductCategories";
import ProductCategories from "./ProductCategory";
import HomeFallback from "@/components/common/HomeFallback";

export default function ProductsPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      setProducts(await getProductsAPI(activePage));
    }
    getData();

  }, [activePage]);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h3 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        Products
      </h3>
      <React.Suspense fallback={<HomeFallback />}>
        <ProductCategories />
      </React.Suspense>
      <ProductList products={products} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={products[0]?.totalProducts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}

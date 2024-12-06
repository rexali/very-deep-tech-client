'use client'

import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import ProductList from "./ProductList";
import ReactPagination from "@/components/react-pagination";
import { getProductsAPI } from "./api/getProductsAPI";
import ProductCategories from "./ProductCategory";
import Fallback from "@/components/common/fallback";
import { getCategoriesAPI } from "./api/getCategoriesAPI";

export default function ProductsPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any>([]);
  const [categoryData, setCategoryData] = useState<any>([]);


  useEffect(() => {
    async function getData() {
      setCategoryData(await getCategoriesAPI(activePage));
      setProducts(await getProductsAPI(activePage));
    }
    getData();

  }, [activePage]);


  if (!products.length) {
    return <Fallback item={'No product matches your search term'} />
  }


  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }} >
      <h3 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        Products
      </h3>
      <ProductCategories categoryData={categoryData} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ProductList products={products} />
      </Box>
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

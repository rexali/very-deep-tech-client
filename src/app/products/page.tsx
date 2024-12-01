'use client'

import { Suspense, useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import ProductList from "./ProductList";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import ReactPagination from "@/components/react-pagination";
import { getProductsAPI } from "./api/getProductsAPI";
import { getProductCategories } from "./utils/getProductCategories";
import ProductCategories from "./ProductCategory";

export default function ProductsPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      setProducts(await getProductsAPI(activePage));
    }
    getData();

  }, [activePage]);

  const categories = getProductCategories(products);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        Products
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
      <ProductCategories categories={categories} />
      <Suspense fallback={<Fallback />}>
        <ProductList products={products} />
      </Suspense>
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={products[0].totalProducts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}

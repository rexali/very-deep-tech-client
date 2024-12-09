'use client'

import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import ProductList from "./ProductList";
import ReactPagination from "@/components/react-pagination";
import { getProductsAPI } from "./api/getProductsAPI";
import Fallback from "@/components/common/fallback";
import { getCategoriesAPI } from "./api/getCategoriesAPI";
import DesktopProductCategories from "./DesktopProductCategories";
import { useMediaQuery } from "react-responsive";
import SearchInput from "../search/SearchInput";
import TopbarFilter from "./components/TopbarFilter";
import SidebarFilter from "./components/SidebarFilter";

export default function ProductsPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any>([]);
  const [categoryData, setCategoryData] = useState<any>([]);
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

  const handleSetProducts = (value:any)=>{
       setProducts(value)
  }


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
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <h3 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        Products <TopbarFilter handleSetProducts={handleSetProducts} />
      </h3>
      <SearchInput />
      <Box marginTop={4} display={"flex"} flexDirection={'row'} justifyContent={'space-between'} >
        <Box>
          {!isMobile && <DesktopProductCategories categoryData={categoryData} />}
          {!isMobile && <SidebarFilter handleSetProducts={handleSetProducts} />}
        </Box>
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

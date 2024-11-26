"use client"

import Fallback from "@/components/common/fallback";
import { Box, Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect, Suspense } from "react";
import { searchProductsCategoryAPI } from "./api/searchProductsCategoryAPI";
import ReactPagination from "@/components/react-pagination";
import CategoryList from "./CategoryList";

export default function CategoryPage() {
  const searchParams = useSearchParams();
   const term = searchParams.get('term') as string;
  const [data, setData] = useState<any>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const mountRef = useRef(true);

  async function getData() {
    setData(await searchProductsCategoryAPI(term));
  }

  useEffect(() => {
    if (mountRef.current) {
      getData();

      return () => {
        mountRef.current = false;
      }
    }
  });

  if (!data?.length) {
    return <Fallback  item={'No product matches your search term'}/>
  }

  return (
    <Container maxWidth="md" component={'main'} sx={{mt:10}}>
      <h2>Product(s): {term}</h2>
      <Suspense fallback={<Fallback />}>
        <CategoryList term={term} activePage={activePage} />
      </Suspense>
      <Box sx={{ mr: "auto", ml: "auto", maxWidth: 100 }} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data?.length}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}

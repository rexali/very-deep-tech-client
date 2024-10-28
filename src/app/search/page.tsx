"use client"

import Fallback from "@/components/common/fallback";
import { useSearchParams } from "next/navigation";
import { useState, Suspense, useRef, useEffect } from "react";
import SearchList from "./SearchList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { searchProducts } from "./api/searchProducts";

export default function SearchPage() {
  const searchParams = useSearchParams()
  const mountRef = useRef(true)
  const [data, setData] = useState<any>([]);
  const [activePage, setActivePage] = useState<number>(1);

  const term = searchParams.get('term');


  useEffect(() => {
    if (mountRef.current) {
      (async () => {
        setData(await searchProducts(term));
      })();
    }

    return () => {
      mountRef.current = false
    }
  })

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h2>Products</h2>
      <Suspense fallback={<Fallback />}>
        <SearchList term={term} activePage={activePage} />
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

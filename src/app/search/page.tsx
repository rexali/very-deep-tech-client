"use client"

import Fallback from "@/components/common/fallback";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import ProductList from "../products/ProductList";
import { searchAPI } from "./api/searchAPI";

export default function SearchPage() {
  const searchParams = useSearchParams()

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);

  async function getData() {
    setData(await searchAPI(searchParams.get('term')));
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
    return <Fallback />
  }

  return (
    <Container maxWidth="md" component={'main'} sx={{mt:10}}>
      <h2>Products</h2>
      <ProductList products={data} />
    </Container>
  )
}

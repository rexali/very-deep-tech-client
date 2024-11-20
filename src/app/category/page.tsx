"use client"

import Fallback from "@/components/common/fallback";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import ProductList from "../products/ProductList";
import { searchProductsCategoryAPI } from "./api/searchProductsCategoryAPI";

export default function CategoryPage() {
  const searchParams = useSearchParams();
   const term = searchParams.get('term') as string;
  const [data, setData] = useState<any>([]);
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

  if (!data.length) {
    return <Fallback  item={'No product matches your search term'}/>
  }

  return (
    <Container maxWidth="md" component={'main'} sx={{mt:10}}>
      <h2>Product(s): {term}</h2>
      <ProductList products={data} />
    </Container>
  )
}

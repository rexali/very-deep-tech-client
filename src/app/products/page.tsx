'use client'
import { useContext, useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import ProductList from "./ProductList";
import { getProductsAPI } from "./api/getProductsAPI";
import { AppContext } from "@/context/AppContext";
import { getProducts } from "@/store/actions/app-actions";
import Fallback from "@/components/common/fallback";


export default function ProductPage() {

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);
  const { dispatch } = useContext(AppContext);

  async function getData() {
    setData(await getProductsAPI());
    dispatch(getProducts(await getProductsAPI()))
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
    <Container maxWidth="md" component={'main'}>
      <h2>Products</h2>
      <ProductList products={data} />
    </Container>
  )
}

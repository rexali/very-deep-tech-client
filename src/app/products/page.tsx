'use client'
import { useContext, useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import ProductList from "./ProductList";
import { getProductsAPI } from "./api/getProductsAPI";
import { AppContext } from "@/context/AppContext";
import { getProducts } from "@/store/actions/app-actions";


export default function ProductPage() {

  const [data, setData] = useState<any>([{_id: 1 }, {_id: 2 }, {_id: 3 }]);
  const mountRef = useRef(true);
  const {dispatch} = useContext(AppContext);

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
  }, []);

  return (
    <Container maxWidth="md" component={'main'}>
      <h2>Products</h2>
      <ProductList products={data} />
    </Container>
  )
}

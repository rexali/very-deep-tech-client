'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect } from "react";
import { getCartsAPI } from "./api/getCartsAPI";

export default function CartPage() {

  const [data, setData] = useState<any>([{ _id: 1 }, { _id: 2 }, { _id: 3 }]);
  const mountRef = useRef(true);
  const { dispatch } = useContext(AppContext);

  async function getData() {
    setData(await getCartsAPI());
    dispatch(getCarts(await getCartsAPI()))
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
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <CartList products={data} />
    </Container>
  )
}

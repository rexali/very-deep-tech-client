'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect } from "react";
import { getCartsAPI } from "./api/getCartsAPI";
import Fallback from "@/components/common/fallback";

export default function CartPage() {

  const [data, setData] = useState<any>([]);
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
  });

  if (!data?.length) {
    return <Fallback />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <CartList products={data} />
    </Container>
  )
}

'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { getToken } from "@/utils/getToken";

export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);
  const { dispatch } = useContext(AppContext);
  const userId = getToken("_id") as string;

  async function getData() {
    setData(await getUserCartsAPI(userId));
    dispatch(getCarts(await getUserCartsAPI(userId)))
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

  if (data?.length === 0) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <CartList products={data} />
    </Container>
  )
}

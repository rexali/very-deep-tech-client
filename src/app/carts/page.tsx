'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";

export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);
  const { dispatch,state } = useContext(AppContext);
  const userId = state.user?._id ?? "6712c927857f3a3b3492459f";

  async function getData() {
    let userCarts = await getUserCartsAPI(userId);
    setData(userCarts);
    dispatch(getCarts(userCarts))
  }

  useEffect(() => {
    if (mountRef.current) {
      getData();

      return () => {
        mountRef.current = false;
      }
    }
  },[userId, getData]);

  if (!data?.length) {
    return <Fallback />
  }

  if (data?.length === 0) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <CartList products={data} refreshCart={getData} />
    </Container>
  )
}

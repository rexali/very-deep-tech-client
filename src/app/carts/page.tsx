'use client'

import { Container } from "@mui/material";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect, useCallback } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { CartListComponent } from "./CartListComponent";
import { AuthContext } from "@/context/AuthContext";

export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);
  const { dispatch, state } = useContext(AuthContext);
  const userId = state.user?._id ?? "6712c927857f3a3b3492459f";

  const getData = useCallback(async () => {
    let userCarts = await getUserCartsAPI(userId);
    dispatch(getCarts(userCarts));
    setData(userCarts);
  }, [dispatch, userId])


  useEffect(() => {
    if (mountRef.current) {
      getData();

      return () => {
        mountRef.current = false;
      }
    }
  }, [getData, userId]);


  if (!data.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <CartListComponent products={data} refreshCart={getData} />
    </Container>
  )
}

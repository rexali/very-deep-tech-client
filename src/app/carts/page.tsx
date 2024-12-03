'use client'

import { Container, Box } from "@mui/material";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect, useCallback } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';


export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const mountRef = useRef(true);
  const { dispatch } = useContext(AppContext);
  const {user} = useAuth();

  const userId = user?._id as unknown as string;

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


  if (!data?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {data.length}</Box>
      <CartListComponent products={data} refreshCart={getData} />
    </Container>
  )
}

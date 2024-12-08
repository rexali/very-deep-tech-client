'use client'

import { Container, Box } from "@mui/material";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useRef, useContext, useEffect, useCallback } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';
import { getToken } from "@/utils/getToken";


export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const { dispatch, state } = useContext(AppContext);
  const { user } = useAuth();

  const userId = user?._id as unknown as string || getToken('_id') as string;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getData(id: string) {
    const products = await getUserCartsAPI(id);
    setData(products);
    dispatch(getCarts(products));
  }

  useEffect(() => {

    getData(userId);

  }, [getData, userId]);


  if (!data?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {data.length}</Box>
      <CartListComponent products={data || state.carts} refreshCart={getData} />
    </Container>
  )
}

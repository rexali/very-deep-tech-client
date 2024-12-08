'use client'

import { Container, Box } from "@mui/material";
import { getCarts } from "@/store/actions/app-actions";
import { useState, useContext, useEffect, useCallback } from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';
import { getToken } from "@/utils/getToken";


export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const { dispatch } = useContext(AppContext);
  const auth = useAuth();
  const userId = auth.user?._id as unknown as string || getToken('_id') as string;

  const getData = useCallback(async () => {
    const result = await getUserCartsAPI(userId, activePage)
    setData(result);
    dispatch(getCarts(data))
  }, [activePage, data, dispatch, userId])

  useEffect(() => {

    getData();

  }, [getData]);


  if (!data?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {data[0]?.totalCarts}</Box>
      <CartListComponent
        products={data}
        activePage={activePage}
        setActivePage={setActivePage}
        totalCarts={data[0]?.totalCarts}
        refreshCart={getData}
      />
    </Container>
  )
}

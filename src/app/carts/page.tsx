'use client'

import { Container, Box } from "@mui/material";
import { useState, useContext, useCallback } from "react";
import Fallback from "@/components/common/fallback";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';
import { getToken } from "@/utils/getToken";
import { useUserCarts } from "./hooks/useUserCarts";
import { getUserCartsAPI } from "../users/api/getUserCarts";
import { getCarts } from "@/store/actions/app-actions";

export default function CartPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const { dispatch } = useContext(AppContext);
  const { user } = useAuth();
  const userId = user?._id || getToken('_id') as string;
  const { carts } = useUserCarts(userId, dispatch, activePage);
  const [products, setProducts] = useState<Array<any>>(carts ?? []);

  const getCartData = useCallback(async () => {
    let productsInCart = await getUserCartsAPI(userId, activePage);
    setProducts(productsInCart);
    dispatch(getCarts(productsInCart));
  }, [activePage, dispatch, userId])

  if (!carts?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {carts[0]?.totalCarts}</Box>
      <CartListComponent
        products={products}
        activePage={activePage}
        setActivePage={setActivePage}
        totalCarts={carts[0]?.totalCarts}
        refreshCart={getCartData}
      />
    </Container>
  )
}

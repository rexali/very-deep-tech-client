'use client'

import { Container, Box } from "@mui/material";
import { useState, useContext} from "react";
import Fallback from "@/components/common/fallback";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';
import { getToken } from "@/utils/getToken";
import { useUserCarts } from "./hooks/useUserCarts";

export default function CartPage() {

  const [activePage, setActivePage] = useState<number>(1);
  const { dispatch } = useContext(AppContext);
  const {user} = useAuth();
  const userId = user?._id || getToken('_id') as string;
  const { carts } = useUserCarts(userId, dispatch, activePage);

  if (!carts?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {carts[0]?.totalCarts}</Box>
      <CartListComponent
        products={carts}
        activePage={activePage}
        setActivePage={setActivePage}
        totalCarts={carts[0]?.totalCarts}
      />
    </Container>
  )
}

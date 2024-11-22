'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserOrdersAPI } from "./api/getUserOrders";
import OrderList from "../orders/OrderList";
import Box from "@mui/material/Box";

export default function UserOrders() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;

  React.useEffect(() => {
    async function getData() {
      const orders = await getUserOrdersAPI(userId ?? "6712c927857f3a3b3492459f", activePage);
      setData(orders);
    }

    getData();

  }, [userId, activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No order(s) found</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <OrderList orders={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}
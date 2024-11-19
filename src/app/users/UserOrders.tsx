'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserOrdersAPI } from "./api/getUserOrders";
import OrderList from "../orders/OrderList";

export default function UserOrders() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;
  React.useEffect(() => {
    async function getData() {
      const orders = await getUserOrdersAPI(userId,activePage);
      setData(orders);
    }

    getData();
 
  }, [userId, activePage]);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <OrderList  orders={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}
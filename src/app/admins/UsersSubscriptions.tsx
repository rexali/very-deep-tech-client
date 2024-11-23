'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import Fallback from "@/components/common/fallback";
import Box from "@mui/material/Box";
import { getSubscriptionsAPI } from "../subscriptions/api/getSubscriptionsAPI";
import SubscriptionList from "../subscriptions/SubscriptionList";

export default function UsersSubscriptions() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      const subscriptions = await getSubscriptionsAPI(activePage);
      setData(subscriptions);
    }

    getData();

  }, [activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No subscriptions yet</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <Box>Total Subscriptions: {data[0]?.totalSubscriptions}</Box>
      <React.Suspense fallback={<Fallback />} >
        <SubscriptionList subscriptions={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

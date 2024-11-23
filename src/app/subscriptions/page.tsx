'use client'

import { Container } from "@mui/material";
import React, {useState} from "react";
import SubscriptionList from "./SubscriptionList";
import { getSubscriptionsAPI } from "./api/getSubscriptionsAPI";

export default function QoutesPage() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = React.useState(1);

  (async () => {
    setData(await getSubscriptionsAPI(activePage));
  })()

  return (
    <Container component={'main'} sx={{ mt: 10 }}>
      <SubscriptionList subscriptions ={data} activePage={activePage} setActivePage={setActivePage} />
    </Container>
  )
}

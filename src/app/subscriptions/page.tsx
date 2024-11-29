'use client'

import { Container } from "@mui/material";
import React, {useEffect, useState} from "react";
import SubscriptionList from "./SubscriptionList";
import { getSubscriptionsAPI } from "./api/getSubscriptionsAPI";

export default function QoutesPage() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = React.useState(1);

  useEffect(()=>{
    async function getData(){
      setData(await getSubscriptionsAPI(activePage));
    }
    getData();
   
  },[activePage])

  return (
    <Container component={'main'} sx={{ mt: 10 }}>
      <SubscriptionList subscriptions ={data} activePage={activePage} setActivePage={setActivePage} />
    </Container>
  )
}

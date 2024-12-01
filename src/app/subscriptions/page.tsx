'use client'

import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubscriptionList from "./SubscriptionList";
import { getSubscriptionsAPI } from "./api/getSubscriptionsAPI";
import ReactPagination from "@/components/react-pagination";

export default function QoutesPage() {
  const [data, setData] = useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  useEffect(() => {
    async function getData() {
      setData(await getSubscriptionsAPI(activePage));
    }
    getData();

  }, [activePage])

  return (
    <Container component={'main'} sx={{ mt: 10 }}>
      <SubscriptionList subscriptions={data} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data[0]?.totalSubscriptions}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) =>setActivePage(v)} />
      </Box>
    </Container>
  )
}

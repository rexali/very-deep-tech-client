'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserHistoryAPI } from "./api/getUserHistory";
import TransactionList from "../transactions/TransactionList";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";

export default function UserHistory() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";

  React.useEffect(() => {
    async function getData() {
      const transactions = await getUserHistoryAPI(userId, activePage);
      setData(transactions);
    }

    getData();

  }, [userId, activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No transaction(s) found</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <TransactionList transactions={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
      
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                <ReactPagination
                    activePage={activePage}
                    itemsCountPerPage={4}
                    totalItemsCount={data[0]?.totalTransactions}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => setActivePage(v)} />
            </Box>
    </Container>
  )
}
'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserHistoryAPI } from "./api/getUserHistory";
import TransactionList from "../transactions/TransactionList";

export default function UserHistory() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string;
  React.useEffect(() => {
    async function getData() {
      const transactions = await getUserHistoryAPI(userId,activePage);
      setData(transactions);
    }

    getData();
 
  }, [userId]);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <TransactionList  transactions={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}
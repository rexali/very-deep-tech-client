'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import Fallback from "@/components/common/fallback";
import Box from "@mui/material/Box";
import { getQoutesAPI } from "../qoutes/api/getQoutesAPI";
import QouteList from "../qoutes/QouteList";

export default function UsersQoutes() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      const qoutes = await getQoutesAPI(activePage);
      setData(qoutes);
    }

    getData();

  }, [activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No qoutes yet</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <Box>Total Qoutes: {data[0]?.totalQoutes}</Box>
      <React.Suspense fallback={<Fallback />} >
        <QouteList qoutes={data} activePage={activePage} setActivePage={setActivePage} />
      </React.Suspense>
    </Container>
  )
}

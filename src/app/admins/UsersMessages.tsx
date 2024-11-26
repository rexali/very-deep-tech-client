'use client'

import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import MessageList from "../messages/message-list";
import * as React from "react";
import ReactPagination from "@/components/react-pagination";
import { getUsersMessagesAPI } from "./api/getUsersMessages";
import Fallback from "@/components/common/fallback";

export default function UserMessages() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);
  const handlePageChange = (pageNumber: any) => {
    setActivePage(pageNumber)
  }

  React.useEffect(() => {
    async function getData() {
      setData(await getUsersMessagesAPI(activePage));
    }
    getData();

  }, [activePage])

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No message(s) found</Box>
      </Container>
    )
  }


  return (
    <React.Suspense fallback={<Fallback />} >

    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <Box>Total Messages: {data[0]?.totalMessages}</Box>
      <Grid container columnSpacing={1}>
        <MessageList messages={data} role={'admin'} />
      </Grid>
      <Box marginTop={4} display={"flex"} justifyContent={'center'}>
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data[0]?.messageTotal ?? 4}
          pageRangeDisplayed={5}
          onchangeCallback={handlePageChange} />
      </Box>
    </Container>
    </React.Suspense>
  )
}

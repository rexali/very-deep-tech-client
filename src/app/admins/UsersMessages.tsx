'use client'

import { Box, Button, Grid} from "@mui/material";
import Container from "@mui/material/Container";
import MessageList from "../messages/message-list";
import * as React from "react";
import ReactPagination from "@/components/react-pagination";
import { getUsersMessagesAPI } from "./api/getUsersMessages";
import Add from "@material-ui/icons/Add";
import Link from "next/link";

export default function UserMessages() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const handlePageChange = (pageNumber: any) => {
    setActivePage(pageNumber)
  }

  React.useEffect(()=>{
       async function getData(){
        setData(await getUsersMessagesAPI(activePage));
       }
       getData();

  },[activePage])

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No message(s) found</Box>
      </Container>
    )
  }


  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Messages<Link href={"/messages/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
      <Grid container columnSpacing={1}>
        <MessageList messages={data} role={'admin'} />
      </Grid>
      <Box marginTop={4} display={"flex"} justifyContent={'center'}>
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data.length}
          pageRangeDisplayed={4}
          onchangeCallback={handlePageChange} />
      </Box>
    </Container>
  )
}

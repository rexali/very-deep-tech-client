'use client'
import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import MessageList from "../messages/message-list";
import { useUserMessages } from "./hooks/useUserMessages";
import { AuthContext } from "@/context/AuthContext";
import * as React from "react";
import ReactPagination from "@/components/react-pagination";

export default function UserMessages() {
  const [activePage, setActivePage] = React.useState(1);
  const { state, dispatch } = React.useContext(AuthContext)
  const messages = useUserMessages(state.user?._id, dispatch, activePage) as any;


  const handlePageChange = (pageNumber: any) => {
    setActivePage(pageNumber)
  }

  if (!messages.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No message(s) found</Box>
      </Container>
    )
  }


  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h3>Messages</h3>
      <Grid container columnSpacing={1}>
        <MessageList messages={messages} role={state.user?.role} />
      </Grid>
      <Box marginTop={4} display={"flex"} justifyContent={'center'}>
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={messages.messagesLength}
          pageRangeDisplayed={4}
          onchangeCallback={handlePageChange} />
      </Box>
    </Container>
  )
}

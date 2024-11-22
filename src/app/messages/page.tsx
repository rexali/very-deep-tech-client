'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MessageList from './message-list';
import { useMessages } from './hooks/use-messages';
import Box from '@mui/material/Box';
import ProtectedRoute from '@/components/protected-route';
import ReactPagination from '@/components/react-pagination';
import { AppContext } from '@/context/AppContext';
import { useAuth } from '@/hooks/use-auth';

export default function MessagesPage() {
    const [activePage, setActivePage] = React.useState(1);
    const { state, dispatch } = React.useContext(AppContext)
    const { messages } = useMessages(dispatch, activePage);
    const {user} = useAuth()
   
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
        <ProtectedRoute>
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Grid container columnSpacing={1}>
                    <MessageList messages={state.messages || messages} role={user.role} />
                </Grid>
                <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                    <ReactPagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={messages[0]?.totalMessages}
                        pageRangeDisplayed={5}
                        onchangeCallback={handlePageChange} />
                </Box>
            </Container>
        </ProtectedRoute>
    );
}
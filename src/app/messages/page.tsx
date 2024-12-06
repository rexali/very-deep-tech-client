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
    const { user } = useAuth()
    const [activePage, setActivePage] = React.useState(1);
    const { state, dispatch } = React.useContext(AppContext);
    const { messages } = useMessages(dispatch, activePage);


    const handlePageChange = (pageNumber: any) => {
        setActivePage(pageNumber)
    }

    if (!messages.length) {

        return (
            <Container component={"main"} maxWidth="md" sx={{ mt: 8, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Box textAlign={'center'}>No message(s) found</Box>
            </Container>
        )
    }

    return (
        <ProtectedRoute>
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Grid container columnSpacing={1}>
                    <MessageList messages={state?.messages || messages} role={user.role} />
                </Grid>
            </Container>
            <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                <ReactPagination
                    activePage={activePage}
                    itemsCountPerPage={4}
                    totalItemsCount={messages[0]?.totalMessages}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => handlePageChange(v)} />
            </Box>
        </ProtectedRoute>
    );
}
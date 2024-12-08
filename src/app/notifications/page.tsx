'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NotificationList from './notification-list';
import Box from '@mui/material/Box';
import ProtectedRoute from '@/components/protected-route';
import { useNotifications } from './hooks/use-notifications';
import ReactPagination from '@/components/react-pagination';
import { AppContext } from '@/context/AppContext';
import { useAuth } from '@/hooks/use-auth';

export default function Notifications() {
    const { user } = useAuth();
    const [activePage, setActivePage] = React.useState(1);
    const { dispatch, state } = React.useContext(AppContext);
    const notifications = useNotifications(dispatch, activePage);

    const handlePageChange = (pageNumber: any) => {
        setActivePage(pageNumber)
    }

    if (!notifications.length) {

        return (
            <Container sx={{mt:8, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No notification(s) found</Box>
            </Container>
        )
    }

    return (
        <ProtectedRoute>
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Grid container columnSpacing={1} marginTop={5} display={"flex"} justifyContent={'center'}>
                    <NotificationList notifications={notifications || state?.notifications } role={user.role} />
                </Grid>
            </Container>
            <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                <ReactPagination
                    activePage={activePage}
                    itemsCountPerPage={4}
                    totalItemsCount={notifications[0].totalNotifications}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => handlePageChange(v)} />
            </Box>
        </ProtectedRoute>
    );
}
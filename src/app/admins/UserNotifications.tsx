'use client'

import { Box, Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import * as React from "react";
import ReactPagination from "@/components/react-pagination";
import NotificationList from "../notifications/notification-list";
import { getUsersNotificationsAPI } from "./api/getUsersNotifications";
import Link from "next/link";
import Add from "@material-ui/icons/Add";

export default function UserNotifications() {
    const [data, setData] = React.useState([]);
    const [activePage, setActivePage] = React.useState(1);
    const handlePageChange = (pageNumber: any) => {
        setActivePage(pageNumber)
    }

    React.useEffect(() => {
        async function getData() {
            setData(await getUsersNotificationsAPI(activePage));
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
        <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Notifications <Link href={"/notifications/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
            <Grid container columnSpacing={1}>
                <NotificationList notifications={data} role={'admin'} />
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
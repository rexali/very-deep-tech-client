"use client"

import React, { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/protected-route";
import { Box, Typography, Button, Container } from "@mui/material";
import UsersMessages from "../admins/UsersMessages";
import UsersOrders from "../admins/UsersOrders";
import UsersTransactions from "../admins/UsersTransactions";

import UsersProducts from "../admins/UsersProducts";
import UsersProfiles from "../admins/UsersProfiles";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersCarts from "../admins/UsersCarts";
import "../products/styles/styles.css"
import Add from "@material-ui/icons/Add";
import UsersNotifications from "./UsersNotifications";

export default function UserTabs() {

    let [tabName, setTabName] = useState('profile');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    const styles = {
        navTabs: { fontSize: 'small' },
        minheight: { minHeight: 420 },
        marginTop: { marginTop: 60 }
    }

    return (
        <ProtectedRoute>
            <div className="container" style={styles.minheight}>

                <div className="scrollmenu" style={styles.marginTop}>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profile')} href={""} ><small>Profile</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('products')} href={""} ><small>Products</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('messages')} href={""} ><small>Messages</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('transactions')} href={""} ><small>Transactions</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('carts')} href={""} ><small>Carts</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('notifications')} href={""} ><small>Notifications</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('orders')} href={""} ><small>Orders</small></Link>
                </div>

                <div className="tab-content">
                    <div className="tab-pane container active" id="profile">
                        {tabName === 'profile' ? <ProfileTab /> : ''}
                        {tabName === 'products' ? <ProductsTab /> : ''}
                        {tabName === 'messages' ? <MessagesTab /> : ''}
                        {tabName === 'notifications' ? <NotificationTab /> : ''}
                        {tabName === 'transactions' ? <TransactionTab /> : ''}
                        {tabName === 'carts' ? <CartTab /> : ''}
                        {tabName === 'orders' ? <OrderTab /> : ''}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

function ProductsTab() {

    return (

        <Container maxWidth={"md"}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box component={'div'} textAlign={'left'} >
                    <Typography
                        color='success'
                    >
                        Products
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    Products<Link href={"/products/add"}><Button startIcon={<Add />}></Button></Link>
                </Box>
            </Box>

            <UsersProducts />
        </Container>
    )
}

function ProfileTab() {

    return (
        <Container maxWidth={"md"}>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Profiles
                </Typography>
            </Box>
            <UsersProfiles />
        </Container>
    )
}

function MessagesTab() {
    return (
        <Container maxWidth={"md"}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Messages<Link href={"/messages/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
            <UsersMessages />
        </Container>

    )
}


function NotificationTab() {
    return (
        <Container maxWidth={"md"}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Notifications <Link href={"/notifications/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
            <UsersNotifications />
        </Container>

    )
}

function TransactionTab() {

    return (
        <Container maxWidth={"md"} >
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Transactions
                </Typography>
            </Box>
            <Container maxWidth={"md"}>
                <UsersTransactions />
            </Container>
        </Container>
    )
}


function CartTab() {

    return (
        <Container maxWidth={"md"} >
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Carts
                </Typography>
            </Box>
            <Container maxWidth={"md"}>
                <UsersCarts />
            </Container>
        </Container>
    )
}

function OrderTab() {

    return (
        <Container maxWidth={"md"}>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Orders
                </Typography>
            </Box>
            <UsersOrders />
        </Container>
    )
}

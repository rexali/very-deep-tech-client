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
import AdminProfile from "./AdminProfile";
import UsersQoutes from "./UsersQoutes";
import UsersSubscriptions from "./UsersSubscriptions";

export default function UserTabs() {

    let [tabName, setTabName] = useState('adminprofile');

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
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profiles')} href={""} ><small>Profiles</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('adminprofile')} href={""} ><small>Your profile</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('products')} href={""} ><small>Products</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('messages')} href={""} ><small>Messages</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('transactions')} href={""} ><small>Transactions</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('carts')} href={""} ><small>Carts</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('notifications')} href={""} ><small>Notifications</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('orders')} href={""} ><small>Orders</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('subscriptions')} href={""} ><small>Subscriptions</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('qoutes')} href={""} ><small>Qoutes</small></Link>
                </div>

                <div className="tab-content">
                    <div className="tab-pane container active" id="profile">
                        {tabName === 'adminprofile' ? <AdminProfileTab /> : ''}
                        {tabName === 'profiles' ? <ProfileTab /> : ''}
                        {tabName === 'qoutes' ? <QoutesTab /> : ''}
                        {tabName === 'products' ? <ProductsTab /> : ''}
                        {tabName === 'messages' ? <MessagesTab /> : ''}
                        {tabName === 'notifications' ? <NotificationTab /> : ''}
                        {tabName === 'transactions' ? <TransactionTab /> : ''}
                        {tabName === 'carts' ? <CartTab /> : ''}
                        {tabName === 'orders' ? <OrderTab /> : ''}
                        {tabName === 'subscriptions' ? <SubscriptionsTab /> : ''}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

function ProductsTab() {

    return (

        <Container>
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
        <Container>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Users profiles
                </Typography>
            </Box>
            <UsersProfiles />
        </Container>
    )
}

function QoutesTab() {

    return (
        <Container>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Qoutes
                </Typography>
            </Box>
            <UsersQoutes />
        </Container>
    )
}


function SubscriptionsTab() {

    return (
        <Container>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Subscriptions
                </Typography>
            </Box>
            <UsersSubscriptions />
        </Container>
    )
}

function AdminProfileTab() {

    return (
        <Container >
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your profile
                </Typography>
            </Box>
            <AdminProfile />
        </Container>
    )
}

function MessagesTab() {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Messages<Link href={"/messages/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
            <UsersMessages />
        </Container>

    )
}


function NotificationTab() {
    return (
        <Container >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Notifications <Link href={"/notifications/add"}><Button startIcon={<Add />}></Button></Link>
            </Box>
            <UsersNotifications />
        </Container>

    )
}

function TransactionTab() {

    return (
        <Container >
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Transactions
                </Typography>
            </Box>

            <UsersTransactions />
        </Container>
    )
}


function CartTab() {

    return (
        <Container>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Carts
                </Typography>
            </Box>
            <UsersCarts />
        </Container>
    )
}

function OrderTab() {

    return (
        <Container >
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

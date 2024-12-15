"use client"

import React, { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/protected-route";
import { Box, Typography, Button, Container } from "@mui/material";
import UsersMessages from "./UsersMessages";
import UsersOrders from "./UsersOrders";
import UsersTransactions from "./UsersTransactions";

import UsersProducts from "./UsersProducts";
import UsersProfiles from "./UsersProfiles";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../products/styles/styles.css"
import Add from "@material-ui/icons/Add";
import UsersNotifications from "./UsersNotifications";
import AdminProfile from "./AdminProfile";
import UsersQoutes from "./UsersQoutes";
import UsersSubscriptions from "./UsersSubscriptions";
import { useSearchParams } from "next/navigation";
import UsersCarts from "./UsersCarts";

export default function UserTabs() {
    const searchParams = useSearchParams();
    const tabId = searchParams.get('tabId') || window.sessionStorage.getItem('tabId');
    
    let [tabName, setTabName] = useState(tabId ?? 'admin');

    const openTab = (tabname: any) => {
        window.sessionStorage.setItem('tabId', tabname);
        setTabName(tabname);
    }

    const styles = {
        navTabs: { fontSize: 'small' },
        minheight: { minHeight: 420 },
        marginTop: { marginTop: 60 }
    }

    return (
        <ProtectedRoute>
            <div className="containerx" style={styles.minheight}>

                <div className="scrollmenu" style={styles.marginTop}>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('admin')} href={""} ><small>Your profile</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profiles')} href={""} ><small>User Profiles</small></Link>
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
                    <div className="tab-pane active" id={tabName}>
                        {tabName === 'admin' ? <AdminProfileTab /> : ''}
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

        <Box>
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
        </Box>
    )
}

function ProfileTab() {

    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Users profiles
                </Typography>
            </Box>
            <UsersProfiles />
        </Box>
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
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Carts
                </Typography>
            </Box>
            <UsersCarts />
        </Box>
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

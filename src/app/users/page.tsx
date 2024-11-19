"use client"

import React, { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/protected-route";
import { Box, Typography, Button, Container } from "@mui/material";
import UserFavourites from "./UserFavourites";
import UserMessages from "./UserMessages";
import UserOrders from "./UserOrders";
import UserProducts from "./UserProducts";
import UserProfile from "./UserProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCart from "./UserCart";
import "../products/styles/styles.css"
import Add from "@material-ui/icons/Add";
import UserHistory from "./UserHistory";

export default function UserTabs() {

    let [tabName, setTabName] = useState('profile');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    const styles = {
        navTabs: { fontSize: 'small' },
        minheight: { minHeight: 420 },
        marginTop: { marginTop: 60, maginBottom: 30 }
    }

    return (
        <ProtectedRoute>
            <div className="container" style={styles.minheight}>

                <div className="scrollmenu" style={styles.marginTop}>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profile')} href={""} ><small>Profile</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('products')} href={""} ><small>Products</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('messages')} href={""} ><small>Messages</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('favourites')} href={""} ><small>Favourites</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('cart')} href={""} ><small>Cart</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('orders')} href={""} ><small>Orders</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('transactions')} href={""} ><small>Transactions</small></Link>
                </div>

                <div className="tab-content">
                    <div className="tab-pane container active" id="profile">
                        {tabName === 'profile' ? <ProfileTab /> : ''}
                        {tabName === 'products' ? <ProductsTab /> : ''}
                        {tabName === 'messages' ? <MessagesTab /> : ''}
                        {tabName === 'favourites' ? <FavouritesTab /> : ''}
                        {tabName === 'cart' ? <CartTab /> : ''}
                        {tabName === 'orders' ? <OrderTab /> : ''}
                        {tabName === 'transactions' ? <TransactionTab /> : ''}
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
                Your products <Link href={"/products/add"}><Button startIcon={<Add />}>Add product</Button></Link>
            </Box>
            <UserProducts />
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
                    Your profile
                </Typography>
            </Box>
            <UserProfile />
        </Box>
    )
}

function MessagesTab() {
    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your message(s)
                </Typography>
            </Box>
            <UserMessages />
        </Box>

    )
}

function FavouritesTab() {

    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your favourite(s)
                </Typography>
            </Box>
            <UserFavourites />
        </Box>
    )
}


function CartTab() {

    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your cart
                </Typography>
            </Box>

            <UserCart />
        </Box>
    )
}

function OrderTab() {

    return (
        <Box>

            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your order(s)
                </Typography>
            </Box>
            <UserOrders />
        </Box>
    )
}


function TransactionTab() {

    return (
        <Box>

            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your transaction(s)
                </Typography>
            </Box>
            <UserHistory />
        </Box>
    )
}

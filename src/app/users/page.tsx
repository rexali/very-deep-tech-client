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
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profile')} href={""} ><small>Profile</small></Link>
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('products')} href={""} ><small>Products</small></Link>
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('messages')} href={""} ><small>Messages</small></Link>
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('favourites')} href={""} ><small>Favourites</small></Link>
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('cart')} href={""} ><small>Cart</small></Link>
                    <Link  style={styles.navTabs} data-toggle="tab" onClick={() => openTab('orders')} href={""} ><small>Orders</small></Link>
                </div>

                <div className="tab-content">
                    <div className="tab-pane container active" id="profile">
                        {tabName === 'profile' ? <ProfileTab /> : ''}
                        {tabName === 'products' ? <ProductsTab /> : ''}
                        {tabName === 'messages' ? <MessagesTab /> : ''}
                        {tabName === 'favourites' ? <FavouritesTab /> : ''}
                        {tabName === 'cart' ? <CartTab /> : ''}
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
                        YOUR PRODUCT(S)
                    </Typography>
                </Box>
                <Box component={'div'} textAlign={'right'} >
                    <Button
                        id='create'
                        type='button'
                        variant='contained'
                        color='success'
                        onClick={() => window.location.assign("/products/AddProduct")}
                    >
                        ADD NEW PRODUCT
                    </Button>
                </Box>
            </Box>

            <UserProducts />
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
                    YOUR PROFILE
                </Typography>
            </Box>
            <UserProfile />
        </Container>
    )
}

function MessagesTab() {
    return (
        <Container maxWidth={"md"}>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    YOUR MESSAGE(S)
                </Typography>
            </Box>
            <UserMessages />
        </Container>

    )
}

function FavouritesTab() {

    return (
        <Container maxWidth={"md"} >
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    YOUR FAVOURITES
                </Typography>
            </Box>
            <Container maxWidth={"md"}>
                <UserFavourites />
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
                    YOUR CART
                </Typography>
            </Box>
            <Container maxWidth={"md"}>
                <UserCart />
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
                    YOUR ORDER(S)
                </Typography>
            </Box>
            <UserOrders />
        </Container>
    )
}

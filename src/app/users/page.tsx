"use client"

import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/protected-route";
import { Box, Typography, Button } from "@mui/material";
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
import UserSettings from "./UserSettings";
import UsersNotifications from "./UserNotifications";
import { useProfile } from "./hooks/useProfile";
import { useAuth } from "@/hooks/use-auth";
import { getCarts } from "@/store/actions/app-actions";
import { getUserCartsAPI } from "./api/getUserCarts";
import { AppContext } from "@/context/AppContext";
import { signIn } from "@/store/actions/auth-actions";

export default function UserTabs() {

    let [tabName, setTabName] = useState('profile');
    const auth = useAuth();
    const { dispatch } = useContext(AppContext);
    const mountRef = useRef(true);
    // const userId = authContext.state.user._id !== null ? authContext.state.user._id : "6712c927857f3a3b3492459f";
    const userId = auth.user._id !== null ? auth.user._id : "6712c927857f3a3b3492459f";

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    const { user, error, isLoading } = useProfile();

    const getData = useCallback(async () => {
        let userCarts = await getUserCartsAPI(userId);
        dispatch(getCarts(userCarts));
        dispatch(signIn({ photo: user?.photo }))
    }, [dispatch, user?.photo, userId])


    useEffect(() => {
        if (mountRef.current) {
            getData();

            return () => {
                mountRef.current = false;
            }
        }
    }, [getData, userId]);

    return (
        <ProtectedRoute>
            <div className="container" style={styles.minheight}>

                <div className="scrollmenu" style={styles.marginTop}>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('profile')} href={""} ><small>Profile</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('products')} href={""} ><small>Products</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('messages')} href={""} ><small>Messages</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('notifications')} href={""} ><small>Notifications</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('favourites')} href={""} ><small>Favourites</small></Link>
                    {/* <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('cart')} href={""} ><small>Cart</small></Link> */}
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('orders')} href={""} ><small>Orders</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('transactions')} href={""} ><small>Transactions</small></Link>
                    <Link style={styles.navTabs} data-toggle="tab" onClick={() => openTab('settings')} href={""} ><small>Settings</small></Link>
                </div>

                <div className="tab-content">
                    <div className="tab-pane container active" id="profile">
                        {tabName === 'profile' ? <ProfileTab user={user} /> : ''}
                        {tabName === 'products' ? <ProductsTab /> : ''}
                        {tabName === 'messages' ? <MessagesTab /> : ''}
                        {tabName === 'notifications' ? <NotificationsTab /> : ''}
                        {tabName === 'favourites' ? <FavouritesTab /> : ''}
                        {tabName === 'cart' ? <CartTab /> : ''}
                        {tabName === 'orders' ? <OrderTab /> : ''}
                        {tabName === 'transactions' ? <TransactionTab /> : ''}
                        {tabName === 'settings' ? <SettingsTab /> : ''}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

const styles = {
    navTabs: { fontSize: 'small' },
    minheight: { minHeight: 420 },
    marginTop: { marginTop: 60, maginBottom: 30 }
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

function SettingsTab() {

    return (

        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                Settings
            </Box>
            <UserSettings />
        </Box>
    )
}

function ProfileTab(props: any) {

    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Your profile
                </Typography>
            </Box>
            <UserProfile user={props?.user} />
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

function NotificationsTab() {
    return (
        <Box>
            <Box component={'div'} textAlign={'left'} >
                <Typography
                    color='success'
                >
                    Notification(s)
                </Typography>
            </Box>
            <UsersNotifications />
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

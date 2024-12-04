'use client'

import Button from "@mui/material/Button";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Edit from '@mui/icons-material/Edit';
import Minus from '@mui/icons-material/RemoveCircle';
import Plus from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import { useState, useContext, useEffect, useRef } from "react";
import StatusModal from "@/components/common/status-modal";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { createCartAPI } from "@/app/carts/api/createCartAPI";
import GetQouteModal from "@/components/GetQuoteModal";
import { isAllReadyAddedToCartByUserAPI } from "@/app/carts/api/isAlreadyAddedToCartByUserAPI";
import { getUserCartsAPI } from "@/app/carts/api/getUserCartsAPI";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { savePathLink } from "@/utils/savePathLink";
import { getToken } from "@/utils/getToken";

export default function ProductBottomActions({ product, role, cart }: { product: any, role?: string, cart?: any }) {
    const [open, setOpen] = useState(false);
    const [openQoute, setOpenQoute] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);
    const { state } = useContext(AuthContext);
    const { dispatch } = useContext(AppContext)
    const userId = state.user?._id || getToken('_id');
    const router = useRouter();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleOpenQuote = () => {
        setOpenQoute(true)
    }

    const minusToCartCount = (evt: any) => {
        if (Number(evt.currentTarget.nextSibling.value) === 1) {
            evt.currentTarget.nextSibling.value = 1;
            setQuantity(evt.currentTarget.nextSibling.value)
        } else {
            evt.currentTarget.nextSibling.value = Number(evt.currentTarget.nextSibling.value) - 1;
            setQuantity(evt.currentTarget.nextSibling.value)
        }
    }

    const plusToCartCount = (evt: any) => {
        evt.currentTarget.previousSibling.value = Number(evt.currentTarget.previousSibling.value) + 1;
        setQuantity(evt.currentTarget.previousSibling.value)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Button size="small" onClick={() => setOpenQoute(true)}>Get Qoutes</Button>
            {openQoute && <GetQouteModal closeCallback={handleOpenQuote} productId={product._id} />}
            <Box display={"flex"} justifyContent={'center'}><Button id="minus" onClick={(evt) => minusToCartCount(evt)} startIcon={<Minus />} /><input disabled={true} style={{ width: 15, textAlign: 'center', marginRight: 2, borderRadius: 5 }} value={quantity} /><Button id="plus" onClick={(evt) => plusToCartCount(evt)} startIcon={<Plus />} /></Box>
            {
                (role === 'admin') && <Button
                    size="small"
                    onClick={() => { router.replace('/products/edit', {}) }}
                    startIcon={<Edit />}></Button>
            }
            <Button
                size="small"
                onClick={async () => {
                    if (userId) {
                        if (!await isAllReadyAddedToCartByUserAPI(userId, product._id)) {
                            const cart = await createCartAPI({
                                product_id: product._id,
                                user_id: userId,
                                quantity: quantity,
                                price: product.product_price
                            })
                            if (cart._id) {
                                handleOpen();
                            }

                            let userCarts = await getUserCartsAPI(userId);
                            dispatch(getCarts(userCarts));

                        } else {
                            alert('Already added');
                        }

                    } else {
                        savePathLink();
                        router.push('/auth/signin');
                    }

                }}
                startIcon={<AddToCart />}>Add</Button>
            {open && <StatusModal message={{
                title: "Cart Alert",
                body: "Product added to cart successfully"
            }} closeCallback={handleOpen} />}
        </Box>
    )
}

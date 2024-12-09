'use client'

import Button from "@mui/material/Button";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Edit from '@mui/icons-material/Edit';
import Minus from '@mui/icons-material/RemoveCircle';
import Plus from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import StatusModal from "@/components/common/status-modal";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { createCartAPI } from "@/app/carts/api/createCartAPI";
import { isAllReadyAddedToCartByUserAPI } from "@/app/carts/api/isAlreadyAddedToCartByUserAPI";
import { getUserCartsAPI } from "@/app/carts/api/getUserCartsAPI";
import { AppContext } from "@/context/AppContext";
import { getCarts } from "@/store/actions/app-actions";
import { getToken } from "@/utils/getToken";
import GetQouteModal from "@/app/qoutes/components/GetQuoteModal";
import { goToSavedLinkpath } from "@/utils/goToSavedLinkPath";


export default function ProductBottomActions({ product, role }: { product: any, role?: string }) {
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
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                <Button size="small" onClick={() => setOpenQoute(true)}>Get Qoutes</Button>
                <Box display={"flex"} justifyContent={'center'}><Button size="small" id="minus" onClick={(evt) => minusToCartCount(evt)} endIcon={<Minus />} /><input disabled={true} style={{ width: 15, textAlign: 'center', borderRadius: 8 }} value={quantity} /><Button size="small" id="plus" onClick={(evt) => plusToCartCount(evt)} startIcon={<Plus />} /></Box>
                {
                    (role === 'admin') && <Button
                        size="small"
                        onClick={() => { router.push(`/products/edit?productId=${product._id}&role=admin`) }}
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
                            router.push('/auth/signin?next='+goToSavedLinkpath(''));
                        }

                    }}
                    startIcon={<AddToCart />}>Add</Button>
            </Box>
            {open && <StatusModal message={{
                title: "Cart Alert",
                body: "Product added to cart successfully"
            }} closeCallback={handleOpen} />}
            {openQoute && <GetQouteModal closeCallback={handleOpenQuote} productId={product._id} />}
        </Box>
    )
}

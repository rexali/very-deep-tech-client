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

    const [quantity, setQuantity] = useState<number>(product?.cartQuantity ?? 1);
    const { state } = useContext(AuthContext);
    const { dispatch } = useContext(AppContext)
    const userId = state.user?._id || getToken('_id');
    const router = useRouter();

    let minusElement = document.querySelector('#minus') as any;
    let plusElement = document.querySelector('#plus') as any;

    minusElement.addEventListener('click', () => {
        if (Number(minusElement.nextSibling.value) === 1) {
            minusElement.nextSibling.value = 1;
            setQuantity(minusElement.nextSibling.value)
        } else {
            minusElement.nextSibling.value = Number(minusElement.nextSibling.value) - 1;
            setQuantity(minusElement.nextSibling.value)
        }
    })
    plusElement.addEventListener('click', () => {
        plusElement.previousSibling.value = Number(plusElement.previousSibling.value) + 1;
        setQuantity(plusElement.previousSibling.value)
    })

    var range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleOpenQuote = () => {
        setOpenQoute(true)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Button size="small" onClick={() => setOpenQoute(true)}>Get Qoutes</Button>
            {openQoute && <GetQouteModal closeCallback={handleOpenQuote} productId={product._id} />}
            {/* <label>
                <span>qty: </span>
                <span style={{ marginRight: 5 }}>{quantity}</span>&nbsp;&nbsp;&nbsp;
                <select onChange={
                    async (evt: any) => {
                        const { value } = evt.target;
                        setQuantity(value);
                    }
                }>
                    {range(1, Number(product?.product_quantity ?? 1)).map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
            </label> */}
           
                <span><Button id="minus" startIcon={<Minus />} /><input style={{ width: 5 }} id="value" value={quantity} /><Button id="plus" startIcon={<Plus />} /></span>
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

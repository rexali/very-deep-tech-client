'use client'

import Button from "@mui/material/Button";
import { getToken } from "@/utils/getToken";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Edit from '@mui/icons-material/Edit'

import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import StatusModal from "@/components/common/status-modal";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { createCartAPI } from "@/app/carts/api/createCartAPI";
import GetQouteModal from "@/components/GetQuoteModal";
import { isAllReadyAddedToCartByUserAPI } from "@/app/carts/api/isAlreadyAddedToCartByUserAPI";

export default function ProductBottomActions({ product, role }: { product: any, role?: string }) {
    const [open, setOpen] = useState(false);
    const [openQoute, setOpenQoute] = useState(false);

    const [quantity, setQuantity] = useState<number>(product?.cartQuantity ?? 1);
    const { state } = useContext(AuthContext);
    const userId = state.user?._id ?? "6712c927857f3a3b3492459f";
    const router = useRouter();

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
            <label>
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
            </label>
            {
                (role === 'admin') && <Button
                    size="small"
                    onClick={() => { router.replace('/products/edit', {}) }}
                    startIcon={<Edit />}></Button>
            }
            <Button
                size="small"
                onClick={async () => {
                    if(userId){
                        if (!await isAllReadyAddedToCartByUserAPI(userId, product._id)) {
                            const cart = await createCartAPI({
                                product_id: product._id,
                                user_id: (userId || getToken("_id")) ?? "6712c927857f3a3b3492459f",
                                quantity: quantity,
                                price: product.product_price
                            })
                            if (cart._id) {
                                handleOpen();
                            }
                        } else {
                            alert('Already added')
                        }
    
                    }else{
                        router.push('/auth/signin') 
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

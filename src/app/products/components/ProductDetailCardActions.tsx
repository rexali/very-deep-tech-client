'use client'

import Share from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import Favourite from '@mui/icons-material/Favorite';
import { getToken } from "@/utils/getToken";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Box from "@mui/material/Box";
import { useState } from "react";
import StatusModal from "@/components/common/status-modal";

export default function ProductCardActions({ product, createCartAPI }: { product: any, createCartAPI: any }) {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true)
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Button size="small" startIcon={<Share />}></Button>
            <Button size="small" startIcon={<Favourite />}></Button>
            <Button
                size="small"
                onClick={async () => {

                    const cart = await createCartAPI({
                        product_id: product._id,
                        user_id: getToken("_id") ?? "6712c927857f3a3b3492459f",
                        quantity: 1,
                        price: product.product_price
                    })
                    if (cart._id) {
                        handleOpen();
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

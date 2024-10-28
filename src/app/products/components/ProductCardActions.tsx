'use client'

import Share from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import Favourite from '@mui/icons-material/Favorite';
import { getToken } from "@/utils/getToken";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Box from "@mui/material/Box";

export default function ProductCardActions({ product, createCartAPI }: { product: any, createCartAPI: any }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width:"100%" }}>
            <Button size="small">N {product.product_price ?? 1000}</Button>
            <Button size="small" startIcon={<Share />}></Button>
            <Button size="small" startIcon={<Favourite />}></Button>
            <Button
                size="small"
                onClick={() => {
                    createCartAPI({
                        product_id: product.product_id,
                        user_id: getToken("_id"),
                        quantity: 1,
                        price: product.product_price
                    })
                }}
                startIcon={<AddToCart />}>Add</Button>
        </Box>
    )
}

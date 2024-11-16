'use client'

import Share from "@mui/icons-material/Share";
import Remove from "@mui/icons-material/Remove";

import Button from "@mui/material/Button";
import Favourite from '@mui/icons-material/Favorite';
import { getToken } from "@/utils/getToken";
import Box from "@mui/material/Box";
import { useState } from "react";
import StatusModal from "@/components/common/status-modal";
import { shareLink } from "@/utils/shareLink";
import { createFavouriteAPI } from "@/app/favourites/api/createFavouriteAPI";
import { deleteProductAPI } from "../api/deleteProductAPI";
import { useRouter } from "next/navigation";

export default function ProductTopActions({ product, role }: { product: any, role?: string }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            {
                role === 'admin' &&
                <Button
                    size="small"
                    onClick={() => {
                        router.replace(`/products/delete?productId=${product._id}&role=admins`, {});
                    }
                    }
                    startIcon={<Remove />}>
                </Button>
            }
            <Button
                size="small"
                onClick={(() => shareLink(product._id))}
                startIcon={<Share />}></Button>
            <Button
                size="small"
                onClick={async () => {
                    const favorite = await createFavouriteAPI({
                        product_id: product._id,
                        user_id: getToken("_id") ?? "6712c927857f3a3b3492459f"
                    })
                    if (favorite._id) {
                        handleOpen();
                    }
                }}
                startIcon={<Favourite />}></Button>
            {open && <StatusModal message={{
                title: "Favourite Alert",
                body: "Product added to wish list"
            }} closeCallback={handleOpen} />}
        </Box>
    )
}

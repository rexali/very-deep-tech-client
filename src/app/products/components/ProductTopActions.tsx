'use client'

import Share from "@mui/icons-material/Share";
import Remove from "@mui/icons-material/RemoveCircle";

import Button from "@mui/material/Button";
import Favourite from '@mui/icons-material/Favorite';
import { getToken } from "@/utils/getToken";
import Box from "@mui/material/Box";
import { useState } from "react";
import StatusModal from "@/components/common/status-modal";
import { shareLink } from "@/utils/shareLink";
import { useRouter } from "next/navigation";
import { savePathLink } from "@/utils/savePathLink";
import { addToWishListOrRemove } from "@/app/favourites/utils/addToWishListOrRemove";
import { useAuth } from "@/hooks/use-auth";

export default function ProductTopActions({ product, role }: { product: any, role?: string }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const auth = useAuth();
    const userId = auth.user?._id as unknown as string || getToken('_id') as string;

    let likes = product?.likes ?? [];
    let userLikes = likes.map((like: any) => like?.user);

    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>

            {
                role === 'admin' &&
                <Button
                    size="small"
                    onClick={() => {
                        router.push(`/products/delete?productId=${product._id}&role=admin`, {});
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
                    if (userId) {
                        await addToWishListOrRemove(userId, product._id, handleOpen);
                        router.refresh();
                    } else {
                        savePathLink()
                        router.push('/auth/signin')
                    }

                }}
                startIcon={<Favourite sx={{ color: userLikes?.includes(userId) ? 'red' : 'green' }} />}></Button>
            {open && <StatusModal message={{
                title: "Favourite Alert",
                body: "Product added to wish list"
            }} closeCallback={handleOpen} />}
        </Box>
    )
}

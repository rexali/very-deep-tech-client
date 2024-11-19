'use client'

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';

import Link from "next/link";
import { deleteProductAPI } from "../api/deleteProductAPI";
import { useSearchParams } from "next/navigation";


export default function DeleteProduct() {

    const params = useSearchParams();

    return (

        <Container
            maxWidth="md"
            component={'main'}
            sx={{ minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}
        >
            <p>Do you really want to delete this item?</p>
            <Box textAlign={'right'} >

                <Button
                    color="warning"
                    onClick={async () => {
                        await deleteProductAPI(params.get('productId') as string)
                    }}
                    startIcon={<Remove />} >
                    Delete
                </Button>

                <Link href={`/${params.get('path') ?? 'admins'}`} >
                    <Button onClick={() => {
                    }} startIcon={<Close />} >
                        Close
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

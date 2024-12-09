'use client'

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';
import Link from "next/link";
import { deleteProductAPI } from "../../api/deleteProductAPI";
import { useAuth } from "@/hooks/use-auth";

export default function Page({ params }: { params: { productId: string } }) {
    const { user } = useAuth();

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
                        if (user.role === 'admin') {
                            if (await deleteProductAPI(params.productId)) {
                                alert('Deleted successfully');
                            } else {
                                alert('Failed');
                            }
                        } else {
                            alert('You are not authorised')
                        }
                    }
                    }
                    startIcon={<Remove />} >
                    Delete
                </Button>

                <Link href={`/${user.role === 'user' ? 'users' : 'admins'}`} >
                    <Button onClick={() => {
                    }} startIcon={<Close />} >
                        Close
                    </Button>
                </Link>
            </Box>
        </Container >
    )
}

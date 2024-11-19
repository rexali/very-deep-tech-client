import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';

import Link from "next/link";
import { deleteProductAPI } from "../api/deleteProductAPI";


export default function DeleteProduct({ params }: { params: { productId: string, path: string } }) {
    const handle = () => { }
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
                        await deleteProductAPI(params.productId)
                    }}
                    startIcon={<Remove />} >
                    Delete
                </Button>

                <Link href={`/${params.path ?? 'admins'}`} >
                    <Button onClick={() => {
                    }} startIcon={<Close />} >
                        Close
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

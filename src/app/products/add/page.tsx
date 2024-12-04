'use client'

import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import TextField from "@mui/material/TextField";
import React from "react";
import { handleProductSubmit } from "../utils/handleProductSubmit";
import { getToken } from "@/utils/getToken";
import Typography from "@mui/material/Typography";
import { useAuth } from "@/hooks/use-auth";

export default function AddProduct() {

    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [loading, setLoading] = React.useState('');

    const auth = useAuth();
    const userId = auth.user?._id as unknown as string || getToken('_id') as string;

    const handleSubmit = async (event: any) => {
        setLoading('Sending data..')
        await handleProductSubmit(event, setSuccess, setError, setLoading, userId)
    }
    
    return (
        <Container maxWidth="md" component={'main'}>
            <Typography component="h1" variant="h5">
                Add product
            </Typography>
            <Box
                sx={{
                    mt: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                component={'form'}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField
                    autoComplete="given-name"
                    name="product_name"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_name"
                    label="Product Name"
                    autoFocus
                />

                <label>
                    Product Photo(s)
                    <input
                        type='file'
                        accept="image/*"
                        name="product_pictures"
                        id="product_pictures"
                        multiple
                        formEncType="multipart/form-data"
                        style={{
                            maxWidth: '100%',
                            borderRadius: 5,
                            borderColor: 'black',
                        }}
                    />
                </label>

                <TextField
                    autoComplete="given-name"
                    name="product_category"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_category"
                    label="Product Category"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_sub_category"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_sub_category"
                    label="Product Sub-Category"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_price"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_price"
                    label="Product Price"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_description"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_description"
                    label="Product Description"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_quantity"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_quantity"
                    label="Product Quantity"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_weight"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_weight"
                    label="Product Weight"
                    autoFocus
                    disabled
                />

                <TextField
                    autoComplete="given-name"
                    name="product_size"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_size"
                    label="product_size"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_code"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_code"
                    label="product_code"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_demo_link"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_demos_links"
                    label="Product Video Demo Link(s)"
                    placeholder="seperated it with comma"
                    autoFocus
                />

                <TextField
                    autoComplete="given-name"
                    name="product_photos_links"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_photos_links"
                    label="Product Photos Links"
                    placeholder="seperated it with comma"
                />

                <TextField
                    autoComplete="given-name"
                    name="featured"
                    required
                    fullWidth
                    type='checkbox'
                    margin={"normal"}
                    id="featured"
                    label="Featured"
                />

                {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
                {loading && <Box textAlign={"center"} sx={{ color: "green" }}>{loading.toUpperCase()}</Box>}

                <Button
                    type="submit"
                    size="large"
                    fullWidth
                    variant="contained"
                    color='success'
                    sx={{ mt: 3, mb: 2 }}
                    startIcon={<Send />}
                >
                    Add Product
                </Button>
            </Box>

        </Container>

    )
}
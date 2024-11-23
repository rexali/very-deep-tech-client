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

export default function AddProduct() {

    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const userId = getToken('_id') as string;

    return (
        <Container maxWidth="md" component={'main'}>
            <Box
                sx={{
                    mt: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Add Product
                </Typography>

                <Box
                    component="form"
                    onSubmit={(evt) => handleProductSubmit(evt, setSuccess, setError, userId)}
                    noValidate
                    sx={{ mt: 10 }}
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
                                borderRadius:5,
                                borderColor:'black',
                            }}
                        />
                    </label>

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

                    {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                    {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}

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

            </Box>
        </Container>

    )
}
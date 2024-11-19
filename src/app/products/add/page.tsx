'use client'

import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { handleProductSubmit } from "../utils/handleProductSubmit";
import { getToken } from "@/utils/getToken";

export default function AddProduct() {

    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const userId = getToken('_id') as string;

    return (
        <Box
            component="form"
            onSubmit={(evt) => handleProductSubmit(evt,setSuccess,setError,userId)}
            noValidate
            sx={{ mt: 1 }}
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

            <TextField
                autoComplete="given-name"
                name="product_picture"
                required
                fullWidth
                margin={"normal"}
                id="product_picture"
                label="Product Photo(s)"
                type="file"
            />

            <TextField
                autoComplete="given-name"
                name="photos"
                required
                fullWidth
                margin={"normal"}
                id="photos"
                label="Product Photo(s)"
                inputProps={{
                    endAdornment: (
                        <input
                            type='file'
                            accept="/images/*"
                            // formEncType=""
                            tabIndex={-1}
                            // onChange={() => {}}
                            multiple
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                opacity: 0
                            }}
                        />
                    )
                }}
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
                label="Product Demo Link(s)"
                autoFocus
            />

            <TextField
                autoComplete="given-name"
                name="product_photos_links"
                required
                fullWidth
                margin={"normal"}
                id="product_photos_links"
                label="Product Photo Links"
                autoFocus
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
                SUBMIT
            </Button>

        </Box>
    )
}
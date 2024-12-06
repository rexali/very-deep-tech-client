'use client'

import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { handleProductEditSubmit } from "../utils/handleProductEdit.Submit";
import { getProductAPI } from "../api/getProductAPI";
import Container from "@mui/material/Container";
import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import { SERVER_URL } from "@/constants/url";
import Avatar from "@mui/material/Avatar";

export default function EditProduct() {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = React.useState('');
    const params = useSearchParams() as any;
    let productId = params.get('productId');
    let role = params.get('role');

    const handleSubmit = async (event: any) => {
        if (role === 'admin') {
            setLoading('Sending data..')
            handleProductEditSubmit(
                event,
                setSuccess,
                setError,
                setLoading,
                productId
            )
        } else {
            setLoading('You are not unauthorized')
        }
    };

    useEffect(() => {
        async function getData() {
            const data = await getProductAPI(productId);
            setData(data);
        }

        getData();


    }, [productId])

    return (
        <Container maxWidth="md" component={'main'} sx={{ mt: 8 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <Box>
                    {data.product_pictures[0] ? <Image
                        src={`${SERVER_URL}/uploads/${data.product_pictures[0]}`}
                        alt="Account"
                        layout="responsive"
                        style={{
                            display: 'block',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            width: "100%",
                            // height: 'auto' 
                            height: 140,
                            borderRadius: 30
                        }}
                        width={0}
                        height={0}
                    /> : <Avatar />
                    }
                </Box>
                <TextField
                    autoComplete="given-name"
                    name="product_name"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_name"
                    label="Product Name"
                    defaultValue={data?.product_name}
                    autoFocus
                />

                <input
                    autoComplete="given-name"
                    name="product_picture"
                    required
                    id="product_picture"
                    type="file"
                    accept="images/*"
                    multiple
                />

                <TextField
                    autoComplete="given-name"
                    name="product_category"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_category"
                    label="Product Category"
                    defaultValue={data?.product_category}
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
                    defaultValue={data?.product_sub_category}
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
                    defaultValue={data?.product_description}
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
                    defaultValue={data?.product_price}
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
                    defaultValue={data?.product_quantity}
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
                    defaultValue={data?.product_weight}
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
                    defaultValue={data?.product_size}
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
                    defaultValue={data?.product_code}
                    autoFocus
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
                    UPDATE
                </Button>
            </Box>
        </Container>
    )
}
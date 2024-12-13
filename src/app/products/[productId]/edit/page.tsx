'use client'

import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { handleProductEditSubmit } from "../../utils/handleProductEdit.Submit";
import Container from "@mui/material/Container";
import Image from 'next/image';
import { SERVER_URL } from "@/constants/url";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "@/hooks/use-auth";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { useProduct } from "../../hooks/useProduct";
import Fallback from "@/components/common/fallback";

export default function Page() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = React.useState('');
    const { user } = useAuth();
    const pathname = usePathname();
    const params = pathname.split('/').filter(param => param !== '');
    const productId = params[1];
    const { data } = useProduct(productId);

    const handleSubmit = async (event: any) => {
        if (user?.role === 'admin') {
            setLoading('Sending data..')
            await handleProductEditSubmit(
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


    if (!Object.keys(data)?.length) {
        return <Fallback item={'No product details found'} />
    }

    return (
        <Container maxWidth="md" component={'main'} sx={{ mt: 8 }}>
            <Typography component="h1" variant="h5">
                Edit product
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <Box>
                    {data?.product_pictures[0] ? 
                    <Image
                        src={`${SERVER_URL}/uploads/${data?.product_pictures[0]}`}
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

                <TextField
                    name="product_photos"
                    id="product_photos"
                    defaultValue={data?.product_pictures?.join(',')}
                    hidden
                    disabled
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
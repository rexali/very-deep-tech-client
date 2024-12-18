'use client'

import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { handleProductEditSubmit } from "../../utils/handleProductEdit.Submit";
import Container from "@mui/material/Container";
import { SERVER_URL } from "@/constants/url";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "@/hooks/use-auth";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { useProduct } from "../../hooks/useProduct";
import Fallback from "@/components/common/fallback";
import CardImage from "../../components/CardImage";
import axios from "axios";
import Remove from "@mui/icons-material/Remove";

export default function Page() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = React.useState('');
    const { user } = useAuth();
    const pathname = usePathname();
    const params = pathname.split('/').filter(param => param !== '');
    const productId = params[1];
    const { data } = useProduct(productId);

    const removeProductPicture = async (photoData: { productId: string, product_picture: string }) => {
        const { data } = await axios.patch(`${SERVER_URL}/products/removeproductpicture`, photoData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (data.status === 'success') {
            return true;
        }

        return false;
    }

    const handleSubmit = async (event: any) => {
        // if (user?.role === 'admin') {
        if ('admin' === 'admin') {
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
            <Typography component="h1" variant="h5" textAlign={"center"}>
                Edit product
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate={false}
                sx={{ mt: 1 }}
            >
                <Box style={{
                    backgroundColor: 'white',
                    overflow: 'auto',
                    whiteSpace: 'nowrap',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    maxWidth: 'fit-content',
                    borderRadius: 15
                }}>
                    {data.product_pictures?.length ?

                        data.product_pictures.map((product_picture: any, i: any) =>
                            <Box key={i}>
                                <Button
                                    color="warning"
                                    fullWidth
                                    variant='text'
                                    size="small"
                                    startIcon={<Remove />}
                                    onClick={async () => {
                                        await removeProductPicture({
                                            product_picture: product_picture,
                                            productId: data._id
                                        })
                                    }}>Remove</Button>
                                <div style={{ display: 'inline-block', margin: 4 }}>
                                    <CardImage
                                        src={`${SERVER_URL}/uploads/${product_picture}`}
                                        alt={data.product_name}
                                        style={{
                                            display: 'block',
                                            marginRight: 'auto',
                                            marginLeft: 'auto',
                                            borderRadius: 20,
                                        }}
                                        width={140}
                                        height={140}
                                    />
                                </div>
                            </Box>
                        ) : <div style={{ display: 'inline-block', margin: 4 }}>
                            <Avatar />
                        </div>
                    }
                </Box>
                <TextField
                    name="product_name"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_name"
                    label="Product Name"
                    defaultValue={data?.product_name}
                    type='text'
                    autoFocus
                />

                {/* <TextField
                    name="product_photos"
                    id="product_photos"
                    defaultValue={data?.product_pictures?.join(',')}
                    hidden={true}
                    disabled
                /> */}

                <label>
                    Product Photo(s):
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
                    name="product_category"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_category"
                    label="Product Category"
                    defaultValue={data?.product_category}
                    type='text'
                />

                <TextField
                    name="product_sub_category"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_sub_category"
                    label="Product Sub-Category"
                    defaultValue={data?.product_sub_category}
                    type='text'
                />

                <TextField
                    name="product_description"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_description"
                    label="Product Description"
                    defaultValue={data?.product_description}
                    type='text'
                />

                <TextField
                    name="product_price"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_price"
                    label="Product Price"
                    defaultValue={data?.product_price}
                    type='number'
                />

                <TextField
                    name="product_quantity"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_quantity"
                    label="Product Quantity"
                    defaultValue={data?.product_quantity}
                    type='number'
                />


                <TextField
                    name="product_weight"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_weight"
                    label="Product Weight"
                    defaultValue={data?.product_weight}
                    type='number'
                />

                <TextField
                    name="product_size"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_size"
                    label="product_size"
                    defaultValue={data?.product_size}
                    type='text'
                    placeholder="e.g., 16cm by 4cm"
                />

                <TextField
                    name="product_code"
                    required
                    fullWidth
                    margin={"normal"}
                    id="product_code"
                    label="product_code"
                    defaultValue={data?.product_code}
                    type='text'
                />

                <TextField
                    name="product_demo_link"
                    required
                    fullWidth
                    margin={"normal"}
                    type='url'
                    id="product_demos_links"
                    label="Product Video Demo ID"
                    placeholder="enter your youtube video ID"
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
        </Container >
    )
}
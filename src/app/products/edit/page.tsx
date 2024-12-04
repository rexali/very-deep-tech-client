'use client'
import Send from "@material-ui/icons/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, {useState, useEffect} from "react";
import { handleProductEditSubmit } from "../utils/handleProductEdit.Submit";
import { getProductAPI } from "../api/getProductAPI";

export default function EditProduct({ params }: { params:{productId:string} }) {
    const [data, setData] = useState<any>({});
    const [error, setError] =useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = React.useState('');
    
    useEffect(()=>{
            async function getData() {
              const data = await getProductAPI(params.productId);
              setData(data);
            }
        
            getData();
         
          
    }, [params.productId])

    return (
        <Box
            component="form"
            onSubmit={(evt) => {
                setLoading('Sending data..')
                handleProductEditSubmit(
                evt,
                setSuccess,
                setError,
                params.productId
            )}}
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
                defaultValue={data?.product_name}
                autoFocus
            />

            <TextField
                autoComplete="given-name"
                name="product_picture"
                required
                fullWidth
                margin={"normal"}
                id="product_picture"
                label="Product Picture"
                defaultValue={data?.product_picture}
                autoFocus
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
                defaultValue={data?.product_sub_category}
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
    )
}
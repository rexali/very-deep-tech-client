
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { getProductsAPI } from './api/getProductsAPI';

export default async function RecommendedProductList(props: any) {

    let products = await getProductsAPI();

    return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={2} display={"flex"} justifyContent={'center'}>
                {products.slice(0,2).map((product: any) => {
                    return <Grid key={product._id + 'recommended'} item xs={6} md={4} lg={3}><ProductCard product={product} /></Grid>
                })}
            </Grid>
    )
}


import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { getProductsAPI } from './api/getProductsAPI';

export default async function RecommendedProductList(props: any) {

    let products = await getProductsAPI();
    // let newProducts = props?.products.slice(0, 2) ?? [];

    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>
                {products.slice(0,2).map((product: any) => {
                    return <Grid key={product._id + 'recommended'} item xs={12} md={6}><ProductCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

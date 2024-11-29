import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { getProductsAPI } from './api/getProductsAPI';


export const revalidate = 3600;
export const dynamicParams = false;

export default async function FeaturedProductList() {

    let products = await getProductsAPI();
    let newProducts = products.slice(0,2);

    return (
        
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 5 }}>
                {newProducts.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><ProductCard product={product} /></Grid>
                })}
            </Grid>
    )
}

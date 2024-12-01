import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
// import { getProductsAPI } from './api/getProductsAPI';

export default function PopularProductList(props: any) {
    // let products = await getProductsAPI() ?? [];
    let products = props.products ?? [];

    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 5 }}>
                {products.slice(0, 2).map((product: any) => {
                    return <Grid key={product._id+'popular'} item xs={12} md={6}><ProductCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

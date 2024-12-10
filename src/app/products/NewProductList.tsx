'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";

export default function NewProductList(props: any) {
    let products = props.products ?? [];

    return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5, marginLeft: "auto", marginRight: "auto"}}>
                {products.slice(0, 2).map((product: any) => {
                    return <Grid key={product._id + 'new'} item xs={12} md={6}><ProductCard product={product} /></Grid>
                })}
            </Grid>
    )
}

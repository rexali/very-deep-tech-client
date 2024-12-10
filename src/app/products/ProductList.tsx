'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";

export default function ProductList(props: any) {
    let products = props.products ?? []
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5, marginLeft: "auto", marginRight: "auto"}}>
                {products.map((product: any) => {
                    return <Grid key={product._id} item xs={12} sm={12} md={6} lg={6}><ProductCard product={product} role={props?.role} /></Grid>
                })}
            </Grid>
        </div>
    )
}

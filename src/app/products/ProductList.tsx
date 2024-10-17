import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";

export default function ProductList(props: any) {

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.products.map((product: any) => {
                return <Grid key={product.product_id} item xs={12} md={6}><ProductCard product={product} /></Grid>
            })}
        </Grid>
    )
}

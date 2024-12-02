'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import SearchCard from './SearchCard';

export default function SearchList(props: any) {
    let products = props.products ?? [];
    
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {products.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><SearchCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

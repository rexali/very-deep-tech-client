'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import { searchAPI } from './api/searchAPI';
import SearchCard from './SearchCard';

// export const revalidate = 3600;
// export const dynamicParams = false;

export default function SearchList(props: any) {
    const [data,setData] = React.useState([]);
     (async ()=>{
        setData(await searchAPI(props.term, props.activePage));
     })()
    
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data?.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><SearchCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

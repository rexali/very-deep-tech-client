'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import { getProductCategories } from '../products/utils/getProductCategories';
import ProductCategories from '../products/ProductCategory';
import CategoryCard from './CategoryCard';
import { searchProductsCategoryAPI } from './api/searchProductsCategoryAPI';

// export const revalidate = 3600;
// export const dynamicParams = false;

export default function CategoryList(props: any) {
    const [data,setData] = React.useState([]);
     (async ()=>{
        setData(await searchProductsCategoryAPI(props.term, props.activePage));
     })()
    
    const categories = getProductCategories(data);

    return (
        <div>
            <ProductCategories categories={categories} />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data?.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><CategoryCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

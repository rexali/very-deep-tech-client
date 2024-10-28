import * as React from 'react';
import Grid from '@mui/material/Grid';
// import ProductCard from "./ProductCard";
// import { getProductsAPI } from './api/getProductsAPI';
import Fallback from '@/components/common/fallback';
// import { getProductCategories } from './utils/getProductCategories';
// import ProductCategories from './ProductCategory';
import Box from '@mui/material/Box';
import ReactPagination from '@/components/react-pagination';
import { getProductCategories } from '../products/utils/getProductCategories';
import { searchAPI } from './api/searchAPI';
import SearchCard from './SearchCard';
import ProductCategories from '../products/ProductCategory';

export const revalidate = 3600;
export const dynamicParams = false;

export default async function SearchList(props: any) {

    const data = await searchAPI(props.term, props.activePage); 
    const categories = getProductCategories(data);
    return (
        <div>
            <ProductCategories categories={categories} />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data?.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><SearchCard product={product} /></Grid>
                })}
            </Grid>
        </div>
    )
}

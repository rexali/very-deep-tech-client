import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { getProductsAPI } from './api/getProductsAPI';
import { getProductCategories } from './utils/getProductCategories';
import ProductCategories from './ProductCategory';
import Box from '@mui/material/Box';
import ReactPagination from '@/components/react-pagination';

export const revalidate = 3600;
export const dynamicParams = false;

export default async function ProductList(props: any) {
    let products;
    products = await getProductsAPI(props?.activePage ?? 1);
    const categories = getProductCategories(products);

    if (props.featured) {
        products = products?.slice(0, 2) ?? []
    }


    return (
        <div>
            <ProductCategories categories={categories} />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 5 }}>
                {products.map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><ProductCard product={product} role={props?.role} /></Grid>
                })}
            </Grid>
            <Box sx={{ mr: "auto", ml: "auto", maxWidth: 100 }} >
                <ReactPagination
                    activePage={props?.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={products[0]?.totalProducts ?? 10}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => props.setActivePage(v)} />
            </Box>
        </div>
    )
}

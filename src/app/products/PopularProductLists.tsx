import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { getProductsAPI } from './api/getProductsAPI';
import Box from '@mui/material/Box';
import ReactPagination from '@/components/react-pagination';

export const revalidate = 3600;
export const dynamicParams = false;

export default async function PopularProductList(props: any) {
    let products = await getProductsAPI(props?.activePage ?? 1);
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 5 }}>
                {products.slice(0, 2).map((product: any) => {
                    return <Grid key={product._id} item xs={12} md={6}><ProductCard product={product} role={props?.role} /></Grid>
                })}
            </Grid>
            {/* <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                <ReactPagination
                    activePage={props?.activePage}
                    itemsCountPerPage={4}
                    totalItemsCount={products[0]?.totalProducts}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => props.setActivePage(v)} />
            </Box> */}
        </div>
    )
}

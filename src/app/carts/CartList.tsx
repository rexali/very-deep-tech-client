'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CartCard from "./CartCard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ClearCartButton from './components/ClearCartButton';
import ReactPagination from '@/components/react-pagination';
import Link from 'next/link';

export default function CartList(props: any) {

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={8} sx={{ marginTop: 1 }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {props?.products.map((product: any) => {
                            return <Grid key={product._id} item xs={12} md={6}><CartCard product={product} refreshCart={props.refreshCart} /></Grid>
                        })}
                    </Grid>
                    <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                        <ReactPagination
                            activePage={props?.activePage}
                            itemsCountPerPage={4}
                            totalItemsCount={props?.totalCarts}
                            pageRangeDisplayed={5}
                            onchangeCallback={(v: any) => props?.setActivePage(v)} />
                    </Box>
                    <ClearCartButton refreshCart={props?.refreshCart} />
                    <Box marginTop={2} display={"flex"} justifyContent={'center'}>
                        <Link
                            href={'/checkout'}
                            style={{
                                display: 'block',
                                padding: 5,
                                borderColor: 'green',
                                borderStyle: 'dotted',
                                textDecoration: 'none',
                                color: 'green',
                                fontSize: 16,
                                width:'50vw'
                            }}>
                            CHECKOUT
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

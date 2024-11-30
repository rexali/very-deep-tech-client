
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { SERVER_URL } from "@/constants/url";
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import Fallback from "@/components/common/fallback";

export default async function HomeProductCategories(props: any) {

    let response = await fetch(`${SERVER_URL}/products`);
    let data = await response.json();
    let products = data.data.products;

    return (
        <ErrorBoundary>
            <React.Suspense fallback={<Fallback />}>
                <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                    <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <span>Categories</span>
                        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
                    </h2>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>
                        {products.map((product: any, i: number) => {
                            return (
                                <Grid item key={i} xs={6} sm={6} md={6} lg={4}>
                                    <Card sx={{ backgroundColor: 'darkorange', maxWidth: 70, MaxHeight: 50 }}>
                                        <CardContent sx={{ textAlign: 'center', alignSelf: 'center' }}>
                                            <Link prefetch style={{ textDecoration: 'none', }} href={`/category/?term=${product.product_category}`}>
                                                <Button size='small' sx={{fontSize:11, color: 'white' }}>
                                                    {product.product_category.toUpperCase()}
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </React.Suspense>
        </ErrorBoundary>
    )
}

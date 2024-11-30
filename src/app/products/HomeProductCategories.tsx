
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { SERVER_URL } from "@/constants/url";
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useEffect, useState, useRef } from 'react';
import Fallback from "@/components/common/fallback";

export default function HomeProductCategories(props: any) {

    const [products, setProducts] = useState<any>([]);
    const mountRef = useRef(true);
    useEffect(() => {
        async function getData() {
            let response = await fetch(`${SERVER_URL}/products`);
            let data = await response.json();
            setProducts(data.data.products);
        }
        if (mountRef.current) {
            getData();
        }
        return () => {
            mountRef.current = false
        }
    }, [])

    if (!products.length) {
        return <Fallback />
    }

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                    <span>Categories</span>
                    <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
                </h2>
                <React.Suspense fallback={<Fallback />}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>
                        {products.map((product: any, i: number) => {
                            return (
                                <Grid item key={i} xs={6} sm={6} md={6} lg={4}>
                                    <Card sx={{ backgroundColor: 'green', maxWidth: '100%', MaxHeight: '100%', textAlign: 'center', alignSelf: 'center' }}>
                                        <CardContent>
                                            <Link prefetch style={{ textDecoration: 'none', }} href={`/category/?term=${product.product_category}`}>
                                                <Button sx={{ fontSize: 11, color: 'white' }}>
                                                    {product.product_category.toUpperCase()}
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </React.Suspense>
            </Container>
        </ErrorBoundary>
    )
}

'use client'
import Container from '@mui/material/Container';
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import HomeProductCategoryList from './HomeProductCategoryList';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function DesktopProductCategories(props: any) {
    let categoryData = props.categoryData ?? [];
    let categories = categoryData.map((product: any) => product.product_category);
    const categoriex = Array.from(new Set([...categories]));
    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h3>Categories</h3>
                {categoriex.map((catx: any, i: number) => {
                    return (
                        <Link key={i} style={{ textDecoration: 'none', display: 'block' }} href={`/category/?term=${catx.toLowerCase()}`}>
                            <Card sx={{ backgroundColor: 'green', maxWidth: '100%', MaxHeight: '100%', textAlign: 'center', alignSelf: 'center' }}>
                                <CardContent>
                                    <Button sx={{ fontSize: 11, color: 'white' }}>
                                        {catx}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                   })
                }

            </Container>
        </ErrorBoundary>
    )
}

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
                <p>Categories</p>
                {categoriex.map((catx: any, i: number) => {
                    return (
                        <Link
                            key={i}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                textAlign: 'center',
                                alignSelf: 'center',
                                textDecoration: 'none',
                                display: 'block',
                                marginRight: 2,
                                marginBottom: 1
                            }}
                            href={`/category/?term=${catx.toLowerCase()}`}>
                            <Button variant='outlined' color='success'>
                                {catx}
                            </Button>
                        </Link>
                    )
                })
                }

            </Container>
        </ErrorBoundary>
    )
}

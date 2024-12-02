'use client'
import Container from '@mui/material/Container';
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import HomeProductCategoryList from './HomeProductCategoryList';

export default function HomeProductCategories({ products }: { products: any }) {

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h3>Categories</h3>
                <HomeProductCategoryList products={products} />
            </Container>
        </ErrorBoundary>
    )
}

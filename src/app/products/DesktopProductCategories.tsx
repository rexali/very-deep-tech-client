'use client'
import Container from '@mui/material/Container';
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import HomeProductCategoryList from './HomeProductCategoryList';

export default function DesktopProductCategories({ categoryData }: { categoryData: any }) {

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h3>Categories</h3>
                <HomeProductCategoryList categoryData={categoryData} />
            </Container>
        </ErrorBoundary>
    )
}
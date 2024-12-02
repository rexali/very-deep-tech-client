'use client'

import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import HomeProductCategoryList from './HomeProductCategoryList';

export default function HomeProductCategories({ products }: { products: any }) {

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                    <span>Categories</span>
                    <Link
                        style={{ textDecoration: "none", color: 'green' }}
                        type="button"
                        color="success"
                        href={`/products`}
                    >
                        See all
                    </Link>
                </h2>
                <HomeProductCategoryList products={products} />
            </Container>
        </ErrorBoundary>
    )
}

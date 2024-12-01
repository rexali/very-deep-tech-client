import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { SERVER_URL } from "@/constants/url";
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import Fallback from "@/components/common/fallback";
import HomeProductCategoryList from './HomeProductCategoryList';

export default function HomeProductCategories({products}:{products:any}) {

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                    <span>Categories</span>
                    <Link style={{ textDecoration: "none", color: 'green' }} href={"/products"}><Button>see</Button></Link>
                </h2>
                <React.Suspense fallback={<Fallback />}>
                   <HomeProductCategoryList products={products} />
                </React.Suspense>
            </Container>
        </ErrorBoundary>
    )
}

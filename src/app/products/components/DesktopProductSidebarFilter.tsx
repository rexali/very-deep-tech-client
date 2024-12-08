'use client'
import Container from '@mui/material/Container';
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';

export default function DesktopProductFiler({ categoryData }: { categoryData: any }) {

    return (
        <ErrorBoundary>
            <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>

                    <Grid item key={1} xs={12} sm={12} md={12}>
                        <Link href={'#'}>
                            <Card sx={{ maxWidth: '100%', MaxHeight: '100%', textAlign: 'center', alignSelf: 'center' }}>
                                <CardContent>
                                    <Button sx={{ fontSize: 11, color: 'white' }}>

                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </ErrorBoundary>
    )
}

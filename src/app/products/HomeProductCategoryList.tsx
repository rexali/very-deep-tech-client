'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function HomeProductCategoryList(props: any) {
    let categories = props.categories ?? [];
    let categoriex = Array.from(new Set(categories.map((category: any) => category.toUpperCase())));

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>
                {
                    categoriex.map((category: any, i: number) => {
                        return (
                            <Grid item key={category} xs={6} sm={6} md={6} lg={4}>
                                <Link prefetch style={{ textDecoration: 'none', }} href={`/category/?term=${category.toLowerCase()}`}>
                                    <Card sx={{ backgroundColor: 'green', maxWidth: '100%', MaxHeight: '100%', textAlign: 'center', alignSelf: 'center' }}>
                                        <CardContent>
                                            <Button sx={{ fontSize: 11, color: 'white' }}>
                                                {category}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
            </Grid>
        </div>
    )
}

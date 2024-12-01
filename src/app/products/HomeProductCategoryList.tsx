import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function HomeProductCategoryList(props: any) {
    let products = props.products ?? [];

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={5} display={"flex"} justifyContent={'center'}>
                {
                    products.map((product: any, i: number) => {
                        return (
                            <Grid item key={product._id + 'category'} xs={6} sm={6} md={6} lg={4}>
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
        </div>
    )
}

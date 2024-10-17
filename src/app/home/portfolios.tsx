'use client'

import CarouselView from '@/components/carousel-view';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Portfolios() {

    const images = [
        {
            label: 'Bello – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Hajia – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Idris – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
            label: 'John – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];
    
    return (
        <Container component="main" maxWidth="md">
            <h2>Portfolio</h2>
            <Typography>What we have done</Typography>
            <CarouselView images={images} />
        </Container>
    );
}

export default Portfolios;
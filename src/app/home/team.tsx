'use client'

import CarouselView from '@/components/carousel-view';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Team() {

    const images = [
        {
            label: 'ajia – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'jia – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bell – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
            label: 'Haj – Thank you for your service',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];
    
    return (
        <Container component="main" maxWidth="md">
            <h2>Team</h2>
            <Typography>Our experts</Typography>
            <CarouselView images={images} />
        </Container>
    );
}

export default Team;
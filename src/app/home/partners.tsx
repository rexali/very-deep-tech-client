'use client'

import CarouselView from '@/components/carousel-view';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Partners() {
    const data = [
        {name:"AWQAF", logo:"https://www.via.placeholder.com/50x50"},
        {name:"AWQAF", logo:"https://www.via.placeholder.com/50x50"},
        {name:"AWQAF", logo:"https://www.via.placeholder.com/50x50"},
    ]

    
const images = [
    {
        label: 'Tahir – Thank you for your service',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Fatima – Thank you for your service',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Hafsat – Thank you for your service',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Aneku – Thank you for your service',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];


    return (
        <Container component="main" maxWidth="md">
            <h2>Partners</h2>
            <Typography>Our associates</Typography>
            <CarouselView images={images}/>
        </Container>
    );
}

export default Partners;
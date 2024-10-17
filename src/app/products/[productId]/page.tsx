"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Share from '@mui/icons-material/Share';
import Favourite from '@mui/icons-material/Favorite';



export default function ProductDetailPage() {
  const product: any = {};
  return (
    <Container maxWidth="md" component={'main'}>

      <Card sx={{ maxWidth: 345, marginTop: 2, marginLeft: "auto", marginRight: "auto" }}>
        <CardMedia
          component="img"
          alt={product.product_name}
          height={300}
          width={340}
          image={product.product_image ?? "https://placehold.co/600x400/orange/white"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.product_image ?? "Lizard"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Button size="small">N {product.product_price ?? 1000}</Button>
          <Button size="small" startIcon={<Share />}></Button>
          <Button size="small" startIcon={<Favourite />}></Button>
          <Button size="small" onClick={() => { alert("Coming soon..") }}>Add to CArt</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
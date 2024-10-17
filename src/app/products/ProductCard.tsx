import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Share from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';


export default function ProductCard({ product }: { product: any }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        alt={product.product_name}
        height="140"
        image={product.product_picture ?? "https://placehold.co/600x400/orange/white"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.product_picture ?? "Lizard"}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}>
        <Button size="small">N {product.product_price ?? 1000}</Button>
        <Button size="small" startIcon={<Share />}></Button>
        <Button size="small" startIcon={<Favorite />}></Button>
        <Button size="small" href={"/products/" + product?.product_id}>Buy</Button>
      </CardActions>
    </Card>
  );
}
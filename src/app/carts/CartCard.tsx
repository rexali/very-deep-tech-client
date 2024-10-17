import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Favorite from '@mui/icons-material/Favorite';

export default function CartCard({ product }: { product: any }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
        <Link href={"/product/" + product?.product_id}>
          <Image
            src={product.product_image ?? "https://placehold.co/600x400/orange/white"}
            alt={product.product_name}
            height={150}
            width={100}
            style={{ borderRadius: 10, alignSelf: "center" }}
          />
        </Link>
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.product_image ?? "Lizard"}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}>
        <Button size="small">Remove</Button>
        <Button size="small">N {product.product_price ?? 1000}</Button>
        <Button size="small" startIcon={<Favorite />}></Button>
      </CardActions>
    </Card>
  );
}
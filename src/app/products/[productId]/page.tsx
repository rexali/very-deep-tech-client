import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getProductAPI } from '../api/getProductAPI';
import Fallback from '@/components/common/fallback';
import { createCartAPI } from '@/app/carts/api/createCartAPI';
import { SERVER_URL } from '@/constants/url';
import ProductCardActions from '../components/ProductCardActions';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch(SERVER_URL + "/products").then(res => res.json());
  return data.data.products.map((product: any) => ({
    productId: product.product_id
  }))
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
const product = await getProductAPI(params.productId)

  if (!Object?.keys(product).length) {
    return <Fallback />
  }

  return (
    <Container maxWidth="md" component={'main'}>
      <Card sx={{ maxWidth: 345, marginTop: 10, marginLeft: "auto", marginRight: "auto" }}>
        <CardMedia
          component="img"
          alt={product.product_name}
          height={300}
          width={340}
          image={product.product_picture ?? "https://placehold.co/600x400/orange/white"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.product_name ?? "Lizard"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
          </Typography>
        </CardContent>
        <CardActions>
          <ProductCardActions product={product} createCartAPI={createCartAPI} />
        </CardActions>
      </Card>
    </Container>
  );
}
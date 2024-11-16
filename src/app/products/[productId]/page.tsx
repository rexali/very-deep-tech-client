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
import Box from '@mui/material/Box';
import ProductDetailCardActions from '../components/ProductDetailCardActions';
import Grid from '@mui/material/Grid';
import ReviewPage from '@/app/reviews/page';
import RatingReviewForm from '@/app/reviews/RatingReviewForm';
import ProductTopActions from '../components/ProductTopActions';
import FeaturedProducts from '@/app/home/FeaturedProducts';
import Image from 'next/image';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch(SERVER_URL + "/products").then(res => res.json());
  return data.data.products.map((product: any) => ({
    productId: product.product_id
  }))
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProductAPI(params.productId) ?? {};

  if (!Object?.keys(product).length) {
    return <Fallback />
  }

  return (
    <Container maxWidth="md" component={'main'}>
      <Card sx={{
        maxWidth: "100%",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10
      }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Box>
              {/* Add multiple and scrollable images here using carousel or scrollmenu */}
              <CardMedia
                component="img"
                alt={product.product_name}
                height={400}
                width={100}
                image={product.product_picture ?? "https://placehold.co/600x400/orange/white"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductTopActions product={product} />
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                Name: {product.product_name ?? "Lizard"}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Price: N {product.product_price ?? "Lizard"}
              </Typography>
            </CardContent>
            <CardActions>
              <ProductDetailCardActions product={product} createCartAPI={createCartAPI} />
            </CardActions>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                Description:
              </Typography>
              <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
                {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Shipping Info:
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
              {"We will take care of the shipping of the item and its return in case  of any damages (to the item and you wish to return) during transit"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Payment Method(s):
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
              <ul>
                <li>Paystack</li>
                <li>Flutterwave</li>
                <li>Remita</li>
                <li>Bank Transfer</li>
                <li>Pay on Delivery</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Product Demo:
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
              {'video link here'}
              <iframe
                width={420}
                height={315}
                src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
              >
                Loading ....
              </iframe>
            </Typography>
          </Grid>
          {/* Add multiple and scrollable images here using carousel or scrollmenu */}
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Product Photo(s):
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
              {/* links to more photos of the product*/}
              {'No more photos now'}
              <Image src={'https://placehold.co/600x400/orange/white'} alt={'photo'} height={1000} width={150} />
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <ReviewPage /><br /><br /><br />
      <RatingReviewForm productId={product._id} />
      {/* cross-sell/upsells: Additional products: e.g People who viewed this item also bought */}
      <h4>People who viewed this item also bought:</h4>
      <FeaturedProducts />
    </Container>
  );
}
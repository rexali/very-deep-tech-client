import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getProductAPI } from '../api/getProductAPI';
import Fallback from '@/components/common/fallback';
import { SERVER_URL } from '@/constants/url';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReviewPage from '@/app/reviews/page';
import RatingReviewForm from '@/app/reviews/RatingReviewForm';
import ProductTopActions from '../components/ProductTopActions';
import Image from 'next/image';
import ProductBottomActions from '../components/ProductBottomActions';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import RecommendedProducts from '../RecommendedProducts';


export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch(SERVER_URL + "/products").then(res => res.json());
  return data.data.products.map((product: any) => ({
    productId: product._id
  }))
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProductAPI(params.productId) ?? {};
  const photos = [
    'https://placehold.co/600x400/orange/white',
    'https://placehold.co/600x400/green/white',
    'https://placehold.co/600x400/red/white'
  ];
  const links = [
    'https://placehold.co/600x400/brown/white',
    'https://placehold.co/600x400/green/white',
    'https://placehold.co/600x400/yellow/white'
  ]

  if (!Object?.keys(product).length) {
    return <Fallback item={'No item found yet'} />
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
            {/* Add multiple and scrollable images here using carousel or scrollmenu */}
            <Box
              style={{
                backgroundColor: 'white',
                overflow: 'auto',
                whiteSpace: 'nowrap',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
                maxWidth: 'fit-content',
                borderRadius: 15
              }}
            >
              {product.product_pictures?.length ?

                product.product_pictures.map((product_picture: any, i: any) =>
                  <div key={i} style={{ display: 'inline-block', margin: 10 }}>
                    <Image
                      src={`${SERVER_URL}/uploads/${product_picture}`}
                      alt={product.product_name}
                      layout="responsive"
                      style={{
                        display: 'block',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: "100%",
                        height: 140,
                      }}
                      width={0}
                      height={0}
                    />
                  </div>) : photos.map((photo, i) =>
                    <div key={i} style={{ display: 'inline-block', margin: 10 }}>
                      <Image
                        src={photo}
                        alt={'photo'}
                        layout="responsive"
                        style={{
                          display: 'block',
                          marginRight: 'auto',
                          marginLeft: 'auto',
                          width: "100%",
                          // height: 'auto' 
                          height: 140,
                        }}
                        width={0}
                        height={0}
                      />
                    </div>)
              }
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent style={{ height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <ProductTopActions product={product} />
              <Typography gutterBottom variant="h5" component="div">
                <span>Name: {product.product_name ?? "Lizard"}</span>
              </Typography>
              <Rating name="read-only" value={product?.averageRating ?? 3} readOnly />
              <Typography gutterBottom variant="h5" component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <span>Price: N {product.product_price ?? "Lizard"}</span><Link href={'tel:07016807004'} style={{ fontSize: 12, textDecoration: 'none' }}>Tel: 07016807004</Link>
              </Typography>
              <ProductBottomActions product={product} />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Description:
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', ml: 1 }}>
              {product.product_description ?? "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
            </Typography>
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
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary', }}>
              <ul>
                <li>Paystack</li>
                <li>Bank Transfer</li>
                <li>Opay</li>
                <li>USSD</li>
                <li>Card</li>
                <li>Pay on Delivery</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Product Demo:
            </Typography>
            <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary' }}>
              <iframe
                width={420}
                height={315}
                src={product.product_demos_links ?? 'https://www.youtube.com/embed/tgbNymZ7vqY'}
              >
                Loading ....
              </iframe>
            </Typography>
          </Grid>
          {/* Add multiple and scrollable images here using carousel or scrollmenu */}
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" component="div">
              Other Photo(s):
            </Typography>
            <div
              style={{
                backgroundColor: 'white',
                overflow: 'auto',
                whiteSpace: 'nowrap',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
                maxWidth: 'fit-content',
                borderRadius: 15
              }}
            >

              {product.product_photos_links?.split(',')?.length ?

                product.product_photos_links?.split(',').map((product_photo: any, i: any) =>
                  <div key={i} style={{ display: 'inline-block', margin: 10 }}>
                    <Image
                      src={product_photo}
                      alt={product.product_name}
                      layout="responsive"
                      style={{
                        display: 'block',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: "100%",
                        // height: 'auto' 
                        height: 140,
                      }}
                      width={0}
                      height={0}
                    />
                  </div>) : links.map((link, i) =>
                    <div key={i} style={{ display: 'inline-block', margin: 10 }}>
                      <Image
                        src={link}
                        alt={'link'}
                        layout="responsive"
                        style={{
                          display: 'block',
                          marginRight: 'auto',
                          marginLeft: 'auto',
                          width: "100%",
                          // height: 'auto' 
                          height: 140,
                        }}
                        width={0}
                        height={0}
                      />
                    </div>)
              }
            </div>
          </Grid>
        </Grid>
      </Card>
      <ReviewPage ratings={product.ratings} /><br /><br />
      <RatingReviewForm productId={product._id} />
      {/* cross-sell/upsells: Additional products: e.g People who viewed this item also bought */}
      <RecommendedProducts />
      <Box marginTop={2} padding={2} display={"flex"} justifyContent={'center'}>
        <Link
          style={{ textDecoration: "none", color: 'green' }}
          type="button"
          color="success"
          href={`/products`}
        >
          View all
        </Link>
      </Box>
    </Container>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import ProductTopActions from './components/ProductTopActions';
import ProductBottomActions from './components/ProductBottomActions';
import Image from 'next/image';

export default function ProductCard({ product, role }: { product: any, role?: string }) {

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <ProductTopActions product={product} role={role} />
      <Link href={"/products/" + product._id}>
        <Image
          src={product.product_picture ?? "https://placehold.co/600x400/orange/white"}
          alt={product.product_name ?? 'photo'}
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
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.product_name ?? "Lizard"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          N {product.product_price ?? 1000}
        </Typography>
        <Rating name="read-only" value={product?.averageRating ?? 3} readOnly />
      </CardContent>
      <ProductBottomActions product={product} role={role} />
    </Card>
  );
}
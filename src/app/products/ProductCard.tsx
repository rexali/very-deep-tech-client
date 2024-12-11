import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import ProductTopActions from './components/ProductTopActions';
import ProductBottomActions from './components/ProductBottomActions';
import Image from 'next/image';
import { SERVER_URL } from '@/constants/url';
import { CardMedia } from '@mui/material';

export default function ProductCard({ product, role }: { product: any, role?: string }) {

  const renderImageItem = (product: any) => {

    return product.product_pictures?.length ?
      <CardMedia sx={{ position: 'relative' }}>
        <Link href={"/products/" + product._id}>
          <Image
            src={`${SERVER_URL}/uploads/${product.product_pictures[0]}`}
            alt={product.product_name}
            style={{ objectFit: 'cover' }}
            width={340}
            height={200}
            layout='responsive'
          />
        </Link>
      </CardMedia> :
      <CardMedia>
        <Link href={"/products/" + product._id}>
          <Image
            src={"https://placehold.co/600x400/orange/white"}
            alt={'photo'}
            layout="responsive"
            style={{ objectFit: 'cover' }}
            width={320}
            height={100}
          />
        </Link>
      </CardMedia>
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <ProductTopActions product={product} role={role} />
      {renderImageItem(product)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.product_name ?? "Lizard"}
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
          N {product.product_price ?? 1000}
        </Typography>
        <Rating name="read-only" value={product?.averageRating ?? 3} readOnly />
      </CardContent>
      <ProductBottomActions product={product} role={role} />
    </Card>
  );
}
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
import { useState } from "react";
import placeholderImage from '@/assets/images/cshop.png'

export default function ProductCard({ product, role }: { product: any, role?: string }) {
  let src = `${SERVER_URL}/uploads/${product.product_pictures[0]}`
  
  const [imgSrc, setImgSrc] = useState<any>(src);

  const renderImageItem = (product: any) => {

    return product.product_pictures?.length ?
      <CardMedia sx={{ position: 'relative' }}>
        <Link href={"/products/" + product._id}>
          <Image
            src={imgSrc}
            alt={product.product_name}
            layout="responsive"
            style={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: "100%",
              height: 120,
            }}
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"
            onError={() => {
              setImgSrc(placeholderImage)
            }}

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
    <Card
      sx={{
        maxWidth: "100%",
        marginTop: 4,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 4
      }}
    >
      <ProductTopActions product={product} role={role} />
      {renderImageItem(product)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.product_name}
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
          N {product?.product_price}
        </Typography>
        <Rating name="read-only" value={product?.averageRating ?? 3} readOnly />
      </CardContent>
      <ProductBottomActions product={product} role={role} />
    </Card>
  );
}
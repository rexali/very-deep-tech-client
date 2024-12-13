'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProductTopActions from './components/ProductTopActions';
import ProductBottomActions from './components/ProductBottomActions';
import Image from 'next/image';
import { SERVER_URL } from '@/constants/url';
import { CardMedia } from '@mui/material';
import placeholderImage from '@/assets/images/cshop.png'
import GetQouteModal from '../qoutes/components/GetQuoteModal';

export default function ProductCard({ product, role }: { product: any, role?: string }) {
  const [openQoute, setOpenQoute] = React.useState(false);

  const handleOpenQuote = () => {
    setOpenQoute(true)
  }

  let src = `${SERVER_URL}/uploads/${product.product_pictures[0]}`
  const [imgSrc, setImgSrc] = React.useState<any>(src);

  const renderImageItem = (product: any) => {

    return product.product_pictures?.length ?
      <Link href={"/products/" + product._id} >
        <Image
          src={imgSrc}
          alt={product.product_name}
          style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 20,
          }}
          width={170}
          height={170}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"
          onError={() => {
            setImgSrc(placeholderImage)
          }}
        />
      </Link>
      :
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
        maxWidth: 180,
        margin: 1,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ProductTopActions product={product} role={role} />
      {renderImageItem(product)}
      <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {product?.product_name}
          </Typography>
          <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
            N {product?.product_price}
          </Typography>
          <Rating name="read-only" value={product?.averageRating ?? 3} readOnly />
        </Box>
        <Button size="small" sx={{ alignSelf: 'end', fontSize:12 }} onClick={() => setOpenQoute(true)}>Get Qoutes</Button>
      </CardContent>
      <ProductBottomActions product={product} role={role} />
      {openQoute && <GetQouteModal closeCallback={handleOpenQuote} productId={product._id} />}
    </Card>
  );
}
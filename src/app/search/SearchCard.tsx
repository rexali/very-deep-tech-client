import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Share from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';
import Link from 'next/link';
import GetQouteModal from '@/components/GetQuoteModal';
import { shareLink } from '@/utils/shareLink';

export default function SearchCard({ product }: { product: any }) {

  const [open, setOpen] = React.useState(false);
  
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Link href={"/products/" + product?._id}>
        <CardMedia
          component="img"
          alt={product?.product_name}
          height="140"
          image={product?.product_picture ?? "https://placehold.co/600x400/orange/white"}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.product_name ?? "Lizard"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          N {product?.product_price ?? 1000}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}>
      <Button size="small" onClick={() => setOpen(true)}>Get Qoutes</Button>
      {open && <GetQouteModal closeCallback={setOpen} productId={product?.product_id} />}
        <Button size="small" onClick={() => shareLink(product?.product_id)} startIcon={<Share />}></Button>
        <Button size="small" onClick={() => alert("comming soon")} startIcon={<Favorite />}></Button>
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products/" + product?._id}><Button>Buy</Button></Link>
      </CardActions>
    </Card>
  );
}
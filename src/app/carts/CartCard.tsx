'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { updateCartAPI } from './api/updateCartAPI';
import { SERVER_URL } from '@/constants/url';
import { useAuth } from '@/hooks/use-auth';
import { getToken } from '@/utils/getToken';
import { deleteUserCartAPI } from './api/deleteUserCartAPI';
import { AppContext } from '@/context/AppContext';
import { getCarts } from '@/store/actions/app-actions';
import { getUserCartsAPI } from './api/getUserCartsAPI';

export default function CartCard({ product }: { product: any }) {
  const [quantity, setQuantity] = React.useState<number>(product?.cartQuantity ?? 0);
  const { dispatch } = React.useContext(AppContext)
  const auth = useAuth();
  const userId = auth.user?._id || getToken('_id') as string;

  var range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
        <Link href={"/products/" + product._id}>
          {product.product_pictures?.length ?
            <Image
              src={`${SERVER_URL}/uploads/${product.product_pictures[0]}`}
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
            :
            <Image
              src={"https://placehold.co/600x400/orange/white"}
              alt={'photo'}
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
          }
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.product_name ?? "Lizard"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            x  N {product.product_price ?? 1000}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}>
        <Button size="small" onClick={
          async () => {
            try {
              const cartDelete = await deleteUserCartAPI(product.cartId, userId);
              dispatch(getCarts(await getUserCartsAPI(userId, 1)));
            } catch (error) {
              console.warn(error);
            }

          }
        }>Remove</Button>
        <label>Qty: <span style={{ marginRight: 2 }}>{quantity} </span>
          <select onChange={
            async (evt: any) => {
              const { value } = evt.target;
              setQuantity(value)
              let cartUpdate = await updateCartAPI({
                _id: product.cartId,
                product_id: product._id,
                user_id: userId,
                quantity: value,
                price: product.product_price
              });

              dispatch(getCarts(await getUserCartsAPI(userId, 1)));


            }
          }>
            {range(0, Number(product?.product_quantity ?? 1)).map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
      </CardActions>
    </Card>
  );
}
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
import { deleteCartAPI } from './api/deleteCartAPI';
import { AuthContext } from '@/context/AuthContext';
import { SERVER_URL } from '@/constants/url';

export default function CartCard({ product, refreshCart }: { product: any, refreshCart: any }) {
  const [quantity, setQuantity] = React.useState<number>(product?.cartQuantity ?? 0);
  const { state } = React.useContext(AuthContext);
  const userId = state.user?._id ?? "6712c927857f3a3b3492459f";

  var range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
        <Link href={"/products/" + product._id}>
          {product.product_pictures?.length ?
            <Image
              src={`${SERVER_URL}/uploads/${product.product_pictures[0]}`}
              alt={product.product_name}
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
          {/* <Image
            src={product.product_picture ?? "https://placehold.co/100x100/orange/white"}
            alt={product.product_name ?? "pic"}
            height={100}
            width={100}
            style={{ borderRadius: 10, alignSelf: "center" }}
          /> */}
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.product_name ?? "Lizard"};
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
              const cartDelete = await deleteCartAPI(product.cartId);
              setTimeout(async () => {
                await refreshCart();
              }, 3000);
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

              setTimeout(async () => {
                await refreshCart();
              }, 3000);
            }
          }>
            {range(0, Number(product?.product_quantity ?? 1)).map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
      </CardActions>
    </Card>
  );
}
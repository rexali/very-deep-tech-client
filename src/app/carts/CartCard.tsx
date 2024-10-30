import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
// import Add from '@mui/icons-material/';
// import Minus from '@mui/icons-material/RemoveCircle';
import { getToken } from '@/utils/getToken';
import { updateCartAPI } from './api/updateCartAPI';
import { deleteCartAPI } from './api/deleteCartAPI';

export default function CartCard({ product, refreshCart }: { product: any, refreshCart: any }) {
  const [quantity, setQuantity] = React.useState<number>(product?.cartQuantity ?? 0);
  const _id = getToken("_id") ?? "6712c927857f3a3b3492459f";

  // const increaseQuantity = (evt: any) => {
  //   let initialQuantity = parseInt(evt.currentTarget.previousSibling.value) as any;
  //   setQuantity(parseInt(initialQuantity) + 1);

  //   return initialQuantity + 1;
  // }

  // const decreaseQuantity = (evt: any) => {
  //   let initialQuantity = parseInt(evt.currentTarget.nextSibling.value) as any;
  //   setQuantity(parseInt(initialQuantity) - 1);

  //   return initialQuantity - 1;
  // }

  var range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
        <Link href={"/products/" + product._id}>
          <Image
            src={product.product_picture ?? "https://placehold.co/100x100/orange/white"}
            alt={product.product_name ?? "pic"}
            height={100}
            width={100}
            style={{ borderRadius: 10, alignSelf: "center" }}
          />
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
          {/* <Button onClick={(evt) => decreaseQuantity(evt)}><Minus /></Button> */}
          <select onChange={
            async (evt: any) => {
              const { value } = evt.target;
              setQuantity(value)
              let cartUpdate = await updateCartAPI({
                _id: product.cartId,
                product_id: product._id,
                user_id: _id,
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
          {/* <input
            size={1}
            onChange={async () => {
              let cartUpdate = await updateCartAPI({
                _id: product.cartId,
                product_id: product._id,
                user_id: _id,
                quantity: quantity,
                price: product.product_price
              });

              console.log(cartUpdate);

              setTimeout(async () => {
                await cb(_id);
              }, 3000);
            }}
            value={quantity}
            style={{ maxWidth: 15, textAlign: 'center' }} /> */}
          {/* <Button onClick={async (evt) => {
            increaseQuantity(evt);
            let cartUpdate = await updateCartAPI({
              _id: product.cartId,
              product_id: product._id,
              user_id: _id,
              quantity: quantity,
              price: product.product_price
            });

            console.log({
              _id: product.cartId,
              product_id: product._id,
              user_id: _id,
              quantity: quantity,
              price: product.product_price
            });

            setTimeout(async () => {
              await cb(_id);
            }, 3000);
          }
          }><Add /></Button> */}
        </label>
      </CardActions>
    </Card>
  );
}
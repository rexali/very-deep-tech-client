'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";

export default function CartPage() {
  return (
    <Container maxWidth="lg" component={'main'} >
      <CartList products={[{product_id:1},{product_id:3},{product_id:3}]} />
    </Container>
  )
}

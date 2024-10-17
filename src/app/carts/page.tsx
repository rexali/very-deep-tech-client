'use client'

import { Container } from "@mui/material";
import CartList from "./CartList";

export default function CartPage() {
  return (
    <Container maxWidth="lg" component={'main'} >
      <CartList products={[{}, {}, {}]} />
    </Container>
  )
}

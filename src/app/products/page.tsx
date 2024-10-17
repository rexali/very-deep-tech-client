'use client'

import { Container } from "@mui/material";
import ProductList from "./ProductList";


export default function ProductPage() {

  return (
    <Container maxWidth="md" component={'main'}>
      <h2>Products</h2>
      <ProductList products={ [{ product_id: 1 }, { product_id: 2 }, { product_id: 3 }]} />
    </Container>
  )
}

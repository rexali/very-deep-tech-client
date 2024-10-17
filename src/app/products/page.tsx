'use client'

import { Container } from "@mui/material";
import ProductList from "./ProductList";
// import { products } from "../../../data";


export default function ProductPage() {

  return (
    <Container maxWidth="md" component={'main'}>
      <ProductList products={[{product_id:1}, {product_id:2}, {product_id:3}]
      } />
    </Container>
  )
}

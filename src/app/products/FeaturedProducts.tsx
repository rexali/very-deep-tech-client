'use client'

import { Container, Box } from "@mui/material";
import FeaturedProductList from "./FeaturedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";

export default function FeaturedProducts({ products }: { products: any }) {

  return (
    <ErrorBoundary>
      <Container maxWidth="lg" component={'main'} sx={{ mt: 5 }}>
        <h3>Featured</h3>
          <FeaturedProductList products={products} />
      </Container>
    </ErrorBoundary>
  )
}

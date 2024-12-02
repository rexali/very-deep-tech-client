'use client'

import { Button, Container } from "@mui/material";
import Link from "next/link";
import FeaturedProductList from "./FeaturedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";

export default function FeaturedProducts({ products }: { products: any }) {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
        <h2>Featured</h2>
        <FeaturedProductList products={products} />
      </Container>
    </ErrorBoundary>
  )
}

'use client'

import { Button, Container } from "@mui/material";
import Link from "next/link";
import PopularProductList from "./PopularProductList";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";

export default function PopularProducts({ products }: { products: any }) {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2>Categories</h2>
        <PopularProductList products={products} />
      </Container>
    </ErrorBoundary>
  )
}

'use client'

import { Suspense } from "react";
import { Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import RecommendedProductList from "./RecommendedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RecommendedProducts() {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
        <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
          {/* People who viewed this item also bought: */}
          <span style={{ fontSize: 12 }}>Recommended</span>
          <Link
            style={{ textDecoration: "none", color: 'green' }}
            type="button"
            color="success"
            href={`/products`}
          >
            See all
          </Link>
        </h2>
        <Suspense fallback={<Fallback />}>
          <RecommendedProductList />
        </Suspense>
      </Container>
    </ErrorBoundary>
  )
}

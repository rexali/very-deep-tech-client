'use client'

import { Suspense } from "react";
import { Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import RecommendedProductList from "./RecommendedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RecommendedProducts() {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 2 }}>
        {/* People who viewed this item also bought: */}
        <h3><span>Recommended</span></h3>
        <Suspense fallback={<Fallback />}>
          <RecommendedProductList products />
        </Suspense>
      </Container>
    </ErrorBoundary>
  )
}

'use client'

import { Suspense } from "react";
import { Box, Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import RecommendedProductList from "./RecommendedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RecommendedProducts() {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
        {/* People who viewed this item also bought: */}
        <h3><span>Recommended</span></h3>
        <Suspense fallback={<Fallback />}>
          <RecommendedProductList />
        </Suspense>
        <Box marginTop={2} padding={2} display={"flex"} justifyContent={'center'}>
          <Link
            style={{ textDecoration: "none", color: 'green' }}
            type="button"
            color="success"
            href={`/products`}
          >
            View all
          </Link>
        </Box>
      </Container>
    </ErrorBoundary>
  )
}

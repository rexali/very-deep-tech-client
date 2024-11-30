import { Button, Container } from "@mui/material";
import Link from "next/link";
import FeaturedProductList from "./FeaturedProductList";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";
import Fallback from "@/components/common/fallback";

export default function FeaturedProducts() {

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
        <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
          <span>Featured</span>
          <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
        </h2>
        {/* <React.Suspense fallback={<Fallback />}> */}
          <FeaturedProductList />
        {/* </React.Suspense> */}
      </Container>
    </ErrorBoundary>
  )
}

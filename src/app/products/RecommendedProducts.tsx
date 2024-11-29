import { Suspense, useState } from "react";
import { Button, Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import RecommendedProductList from "./RecommendedProductList";

export default function RecommendedProducts() {

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        <span style={{ fontSize: 12 }}>People who viewed this item also bought:</span>
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
      <Suspense fallback={<Fallback />}>
        <RecommendedProductList />
      </Suspense>
    </Container>
  )
}

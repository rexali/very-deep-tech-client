'use client'

import { Suspense, useState } from "react";
import { Button, Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import ProductList from "../products/ProductList";

export default function FeaturedProducts() {

  const [activePage, setActivePage] = useState<number>(1);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2 style={{ display: 'flex', justifyContent: "space-between" }}>
        Featured Products
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
      <Suspense fallback={<Fallback />}>
        <ProductList setActivePage={setActivePage} activePage={activePage} featured={true} />
      </Suspense>
    </Container>
  )
}

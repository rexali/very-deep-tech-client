'use client'

import { Suspense, useState } from "react";
import { Button, Container } from "@mui/material";
import ProductList from "./ProductList";
import Fallback from "@/components/common/fallback";
import Link from "next/link";

export default function ProductsPage() {

  const [activePage, setActivePage] = useState<number>(1);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h2 style={{ display: 'flex', justifyContent: "space-between" }}>
        Products
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
      <Suspense fallback={<Fallback />}>
        <ProductList setActivePage={setActivePage} activePage={activePage} />
      </Suspense>
    </Container>
  ) 
}

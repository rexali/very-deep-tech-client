'use client'

import { Suspense, useState } from "react";
import { Button, Container } from "@mui/material";
import Fallback from "@/components/common/fallback";
import Link from "next/link";
import ProductList from "../products/ProductList";

export default function FeaturedProducts(props: any) {

  const [activePage, setActivePage] = useState<number>(1);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        {props.title === 'Featured' ? <span>Featured</span> : <span style={{ fontSize: 12 }}>{props.title}</span>}
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
      <Suspense fallback={<Fallback />}>
        <ProductList setActivePage={setActivePage} activePage={activePage} featured={true} />
      </Suspense>
    </Container>
  )
}

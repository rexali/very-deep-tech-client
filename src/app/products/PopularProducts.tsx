import { Button, Container } from "@mui/material";
import Link from "next/link";
import PopularProductList from "./PopularProductLists";

export default function PopularProducts() {

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
        <span>Popular</span>
        <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
      </h2>
        <PopularProductList />
    </Container>
  )
}

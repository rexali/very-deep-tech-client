import { CreateProduct } from "@/app/products/CreateProduct";
import { Container } from "@mui/material";

export default function AddProductPage() {

    return (
      <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
         <CreateProduct />
      </Container>
    )
  }
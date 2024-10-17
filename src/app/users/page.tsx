import ProtectedRoute from "@/components/protected-route";
import { Container } from "@mui/material";

export default function UserPage() {

  return (
    <ProtectedRoute>
      <Container maxWidth="md" component={'main'}>
        Welcome
      </Container>
    </ProtectedRoute>
  )
}

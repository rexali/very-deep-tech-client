import ProtectedRoute from "@/components/protected-route";
import Container from "@mui/material/Container";

export default function UserPage() {

  return (
    <ProtectedRoute>
      <Container maxWidth="md" component={'main'}>
        Welcome ..
      </Container>
    </ProtectedRoute>
  )
}

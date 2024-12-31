import { Alert, Box, Container } from "@mui/material";

export default function ThankYouPage() {

    return (
        <Container maxWidth="md" component={'main'} sx={{ mt: 10, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <p>Thank You</p><br />
                <Alert color="success">Payment successfull</Alert>
            </Box>
        </Container>
    )
}

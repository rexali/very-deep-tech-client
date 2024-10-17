import { Box, Container } from "@mui/material";

export default function Fallback() {

    return <Container maxWidth={'md'} component={'main'} sx={{ minHeight: 420 }}>
        <Box sx={{display:"flex",justifyContent:'center', alignItems:'center'}} textAlign={'center'}>
            Loading...
        </Box>
    </Container>
}

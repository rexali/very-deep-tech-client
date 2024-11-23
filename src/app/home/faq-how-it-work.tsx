
import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function FAQHowItWorks() {

    return (
        <Container component="main" maxWidth="md" sx={{ mt: 5 }} >
            <Box>
                <Grid container rowSpacing={1} columnSpacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography component={"h1"} sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                            Frequently Asked Questions(F. A. Q.)
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                            What is Cshop?
                        </Typography> <br /><br />
                        <Typography component={"p"}>
                            Cshop bring sellers and buyers together to exchange good and services
                        </Typography><br /><br />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={"h1"} sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
                            How Cshop Works
                        </Typography><br /><br />
                        <Typography component={"p"}>
                            We act as an escrow for the buyers and sellers and release money to sellers after the buyers receive their items they have been bought.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

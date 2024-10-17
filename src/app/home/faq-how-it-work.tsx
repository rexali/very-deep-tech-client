
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
                        <Typography component={"h1"} sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>Frequently Asked Questions(F. A. Q.)</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                            What is waqf?
                        </Typography>
                        <Typography component={"p"}>
                            Waqf is an arabic term of which plural is awqaf. Waqf is an islamic endowment.
                            The endowment can be in form of cash or money, land, building, estate etc which are of value and lucrative.
                            Revenue generated from the endowment is used for funding charitable purposes as specified by the donor(waqif)
                        </Typography><br /><br />
                        <Typography sx={{ fontWeight: "bold" }}>
                            Who is waqif?
                        </Typography>
                        <Typography component={"p"}>
                            Waqif is a person who make or donate a waqf for charitable purposes.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={"h1"} sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>How It Works</Typography>
                        <Typography component={"p"}>
                            Your cash waqf (An Islamic endowment in the form of cash) or donation is used to solve a social problem
                            that requires urgent assistance, and parts of the donation is set aside for investment in sharia-compliant investment vehichles,
                            and profit or proceed from the investment is then utilised to fund charitable purposes or causes of your choice. 
                            You &apos;ll continue to earn continous rewards (sadaqatul jarriyah)
                            as this cycle is repeated.
                        </Typography>
                        <Typography>
                            As an individual donor we include you in a list of our members and supporters. As a business or corporate donor we include your entity in a list of our partners or sponsors, as the case may be, during our marketing campaigns.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

'use client'

import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function CreateSupport() {
    const { state } = React.useContext(AuthContext);

    const isUserLoggedIn = (url: string) => {
        if (typeof window !== "undefined") {
            if (state.user?.userId) {
                window.location.assign(url);
            } else {
                window.location.assign("/auth/signin");
            }
        }
    }

    return (
        <Container component="main" maxWidth="md">
            <Box>
                <Grid container spacing={1}>
                    <Grid xs={12} md={6}>
                        <Button variant="contained" color="success"  fullWidth  sx={{ mt: 3, mb: 2 }}>
                            <Link href="/waqfs/create-waqf" style={{ color: "white", textDecoration: "none" }}>Create a waqf</Link>
                        </Button>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Button variant="contained" color="success"  fullWidth  sx={{ mt: 3, mb: 2 }}>
                            <Link href="/waqfs" style={{ color: "white", textDecoration: "none" }}>Support a waqf</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

'use client'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <Container maxWidth={'md'} component={'main'} >
            <Box sx={{ minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <h2>Something went wrong</h2><br />
                <p>name: {error.name}</p><br />
                <p>message: {error.message}</p><br />
                <Button
                    sx={{ display: 'block' }}
                    onClick={() => reset()}
                >
                    Try again
                </Button>
            </Box>
        </Container>
    )
}
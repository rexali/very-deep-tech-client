'use client'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function LoginForm(props: any) {

    return (
        <Box component="form"
            onSubmit={(evt) => props.handleLoginSubmit(evt, props.setLoading, props.setSuccess, props.setError, "/users")}
            noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        // onChange={ (evt)=>handleCheckbox(evt) }  
                        color="primary" />
                }
                label="Remember me"
                name='remeber_me'
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='success'
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link prefetch href="/auth/forget-password">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link prefetch href="/auth/signup">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
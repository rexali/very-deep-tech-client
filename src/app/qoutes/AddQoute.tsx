import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createQouteAPI } from "./api/createQouteAPI";
import * as React from "react";

export function AddQoute(props: any) {
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');

    return (<Box
        component="form"
        onSubmit={(evt) => createQouteAPI(evt, setSuccess, setError)}
        noValidate
        sx={{ mt: 1 }}
    >
        <h3>Request Qoute(s)</h3>

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
            name="phone"
            label="Phone"
            id="phone"
        />

        <TextField
            margin="normal"
            required
            fullWidth
            name="product_id"
            label="Product ID"
            id="productId"
            defaultValue={props.productId}
            hidden
        />

        <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            type='default'
            defaultValue={'What is the latest price?'}
            id="message"
            multiline
        />
        {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
        {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color='success'
            sx={{ mt: 3, mb: 2 }}
        >
            Get Qoute
        </Button>
    </Box>
    )
}
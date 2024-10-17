import * as React from 'react';
import Grid from '@mui/material/Grid';
import CartCard from "./CartCard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CartList(props: any) {

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={8} sx={{ marginTop: 1 }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {props.products.map((product: any) => {
                            return <Grid key={product.product_id} item xs={12} md={6}><CartCard product={product} /></Grid>
                        })}
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} sx={{ marginTop: 1 }}>
                    <Box>
                        <TextField
                            autoComplete="given-name"
                            name="first_name"
                            required
                            fullWidth
                            margin={"normal"}
                            id="first_name"
                            label="First Name"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="last_name"
                            required
                            fullWidth
                            margin={"normal"}
                            id="last_name"
                            label="Last Name"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="email_address"
                            required
                            fullWidth
                            margin={"normal"}
                            id="email_address"
                            label="Email Address"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="street_address"
                            required
                            fullWidth
                            margin={"normal"}
                            id="street_address"
                            label="Address"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="local_govt"
                            required
                            fullWidth
                            margin={"normal"}
                            id="local_govt"
                            label="Local Govt"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="state"
                            required
                            fullWidth
                            margin={"normal"}
                            id="state"
                            label="State"
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="total_amount"
                            required
                            fullWidth
                            margin={"normal"}
                            id="total_amount"
                            label="Total Amount"
                            autoFocus
                        />

                        <Button
                            size="large"
                            fullWidth
                            style={{
                                color: 'green',
                            }}>CHECKOUT</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function GetQouteForm(props: any) {
    return (<Box
        component="form"
        // onSubmit={(evt) => handleContactSubmit(evt, setSuccess, setError)}
        noValidate sx={{ mt: 1 }}
    >
        
        <TextField
            margin="normal"
            required
            fullWidth
            name="qoute"
            label="Get Qoute"
            id="qoute"
            disabled
        />

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
            id="message"
            multiline
        />
        {/* {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
        {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>} */}
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
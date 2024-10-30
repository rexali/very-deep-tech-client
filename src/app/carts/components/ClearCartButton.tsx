'use client'

import ClearAll from "@material-ui/icons/ClearAll";
import Button from "@mui/material/Button";
import { clearUserCartsAPI } from "../api/clearCartsAPI";
import { getToken } from "@/utils/getToken";

export default function ClearCartButton(props: any) {

    return (
        <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color='warning'
            onClick={() => {
                clearUserCartsAPI(getToken("_id") as string)
            }}
            sx={{ mt: 3, mb: 2 }}
            startIcon={<ClearAll />}
        >
            Clear Cart
        </Button>
    )
}
'use client'

import ClearAll from "@material-ui/icons/ClearAll";
import Button from "@mui/material/Button";
import { clearUserCartsAPI } from "../api/clearCartsAPI";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function ClearCartButton(props: any) {

    const { state } = useContext(AppContext);
    const userId = state.user?._id ?? "6712c927857f3a3b3492459f";
    return (
        <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color='warning'
            onClick={async () => {
                if (await clearUserCartsAPI(userId)) {
                    alert('success');
                    return true
                }

                alert('failed');
                return false

            }}
            sx={{ mt: 3, mb: 2 }}
            startIcon={<ClearAll />}
        >
            Clear Cart
        </Button>
    )
}
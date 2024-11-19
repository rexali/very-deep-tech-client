
import { getToken } from "@/utils/getToken";
import { Box, Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Update from "@material-ui/icons/Update";
import * as React from "react";
import { getUserProfileAPI } from "../users/api/getUserProfileAPI";
import { handleProfileUpdate } from "../users/utils/handleProfileUpdate";

export default async function AdminProfile() {
  const [adminProfile, setUserProfile] = React.useState<any>({});
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const userId = getToken('_id') as string;

  React.useEffect(() => {
    async function getUserProfileData() {
      const adminProfile = await getUserProfileAPI(userId);
      setUserProfile(adminProfile);
    }

    getUserProfileData();

  }, [userId]);

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <h2>Profile</h2>
      <Box
        component="form"
        onSubmit={(evt) => handleProfileUpdate(
          evt,
          setSuccess,
          setError,

        )}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          autoComplete="given-name"
          name="first_name"
          required
          fullWidth
          margin={"normal"}
          id="first_name"
          label="First Name"
          defaultValue={adminProfile?.firstName}
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
          defaultValue={adminProfile?.lastName}
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
          defaultValue={adminProfile?.user.email}
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
          defaultValue={adminProfile?.streetAddress}
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
          defaultValue={adminProfile?.localGovt}
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
          defaultValue={adminProfile?.state}
          autoFocus
        />

        {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
        {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}

        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          color='success'
          sx={{ mt: 3, mb: 2 }}
          startIcon={<Update />}
        >
          Update
        </Button>

      </Box>
    </Container>
  )
}

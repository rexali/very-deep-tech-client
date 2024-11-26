'use client'

import { getToken } from "@/utils/getToken";
import { Avatar, Box, Button, FormLabel, TextField, FormControl } from "@mui/material";
import Container from "@mui/material/Container";
import Update from "@material-ui/icons/Update";
import * as React from "react";
import { getUserProfileAPI } from "../users/api/getUserProfileAPI";
import { handleProfileUpdate } from "../users/utils/handleProfileUpdate";
import { BASE_URL, SERVER_URL } from "@/constants/url";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import Fallback from "@/components/common/fallback";

export default function AdminProfile() {
  const [adminProfile, setUserProfile] = React.useState<any>({});
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const { user } = useAuth();
  const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";

  React.useEffect(() => {
    async function getUserProfileData() {
      const adminProfile = await getUserProfileAPI(userId);
      setUserProfile(adminProfile);
    }

    getUserProfileData();

  }, [userId]);

  if (!Object.keys(adminProfile).length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No profile found</Box>
      </Container>
    )
  }

  return (
    <React.Suspense fallback={<Fallback />} >

    <Container maxWidth="lg" component={'main'} sx={{ mt: 5 }}>
      <Box>
        {user.photo ? <Image
          src={`${SERVER_URL}/uploads/${user.photo}`}
          width={150}
          height={150}
          alt="Account"
          style={{ borderRadius: 30 }}
        /> : <Avatar />
        }
      </Box>
      <Box
        component="form"
        onSubmit={async (evt) => await handleProfileUpdate(
          evt,
          setSuccess,
          setError)}
        noValidate
        sx={{ mt: 1 }}
      >
        <FormControl>
          <FormLabel>
            Your photo
          </FormLabel>
          <TextField
            autoComplete="given-name"
            name="photo"
            required
            fullWidth
            margin={"normal"}
            type='file'
            id="photo"
          />
        </FormControl>

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
    </React.Suspense>

  )
}

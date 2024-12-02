'use client'

import { getToken } from "@/utils/getToken";
import { Avatar, Box, Button, FormLabel, TextField, FormControl } from "@mui/material";
import Container from "@mui/material/Container";
import Update from "@material-ui/icons/Update";
import * as React from "react";
import { getUserProfileAPI } from "./api/getUserProfileAPI";
import { handleProfileUpdate } from "./utils/handleProfileUpdate";
import Image from "next/image";
import { SERVER_URL } from "@/constants/url";


export default function UserProfile(props: any) {
  const [profile, setUserProfile] = React.useState<any>({});
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";

  React.useEffect(() => {
    async function getUserProfileData() {
      const profile = await getUserProfileAPI(userId ?? "6712c927857f3a3b3492459f");
      setUserProfile(profile);
    }

    getUserProfileData();

  }, [userId]);

  if (!Object.keys(profile)?.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No profile found</Box>
      </Container>
    )
  }


  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <p>photo: {props?.user?.photo}</p>
      <Box>
        {profile?.photo ? <Image
          src={`${SERVER_URL}/uploads/${profile?.photo}`}
          alt="Account"
          layout="responsive"
          style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            width: "100%",
            // height: 'auto' 
            height: 140,
            borderRadius: 30
          }}
          width={0}
          height={0}
        /> : <Avatar />
        }
      </Box>
      <Box
        component="form"
        onSubmit={async (evt) => await handleProfileUpdate(
          evt,
          setSuccess,
          setError,
          userId
        )}
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
          defaultValue={profile?.firstName}
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
          defaultValue={profile?.lastName}
        />

        <TextField
          autoComplete="given-name"
          name="email_address"
          required
          fullWidth
          margin={"normal"}
          id="email_address"
          label="Email Address"
          defaultValue={profile?.user?.email}
        />

        <TextField
          autoComplete="given-name"
          name="street_address"
          required
          fullWidth
          margin={"normal"}
          id="street_address"
          label="Address"
          defaultValue={profile?.streetAddress}
        />

        <TextField
          autoComplete="given-name"
          name="local_govt"
          required
          fullWidth
          margin={"normal"}
          id="local_govt"
          label="Local Govt"
          defaultValue={profile?.localGovt}
        />

        <TextField
          autoComplete="given-name"
          name="state"
          required
          fullWidth
          margin={"normal"}
          id="state"
          label="State"
          defaultValue={profile?.state}
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

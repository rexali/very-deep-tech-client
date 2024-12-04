"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '@/components/common/copyright';
import { handleMessageSubmit } from '../messages/utils/handleMessageSubmit';
import Share from "@mui/icons-material/Share";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import { shareLink } from "@/utils/shareLink";

export default function ContactPage() {
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState('');

  const handleSubmit = async (event: any) => {
    setLoading('Sending data..');
    await handleMessageSubmit(event, setSuccess, setError, setLoading);
  }

  return (
    <Container component="main" maxWidth="xs" sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography component="h1" variant="h5">
        Contact us
      </Typography>
      <Box>
        <Button
          type='button'
          size="large"
          fullWidth
          variant="contained"
          color='success'
          sx={{ p: 2, mt: 3, mb: 2, display: 'block' }}
          key={'share'}
          onClick={() => shareLink()}
          startIcon={<Share sx={{ color: "white" }}
          />}>Share this site</Button>
        <Button
          type='button'
          size="large"
          fullWidth
          variant="contained"
          color='success'
          sx={{ p: 2, mt: 3, mb: 2, display: 'block' }}
          key={"email"}
          href="mailto:alybaba2009@gmail.com"
          startIcon={<Email sx={{ color: "white" }}
          />}>Email us</Button>
        <Button
          type='button'
          size="large"
          fullWidth
          variant="contained"
          color='success'
          sx={{ p: 2, mt: 3, mb: 2, display: 'block' }}
          key={"tel"} href="tel:08065899144"
          startIcon={<Phone sx={{ color: "white" }}
          />}>Call us</Button>
        <Button
          type='button'
          size="large"
          fullWidth
          variant="contained"
          color='success'
          sx={{ p: 2, mt: 3, mb: 2, display: 'block' }}
          key={"loc"}
          href="http://maps.google.com/?q=19 Almubarak Waqf Foundation, Guda Abdullahi Road, Farm Center, Kano State"
          startIcon={<Place sx={{ color: "white" }}
          />}>Locate us</Button>
      </Box><br />

      <Box>Or</Box><br />

      <Box
        component={'form'}
        onSubmit={handleSubmit}
        noValidate
      >
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
          name="firstName"
          label="First Name"
          type="default"
          id="firstName"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="lastName"
          label="Last Name"
          type="default"
          id="lastName"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="title"
          label="Subject"
          type="default"
          id="title"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="comment"
          label="Message"
          type='default'
          id="comment"
          multiline
        />
        {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
        {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
        {loading && <Box textAlign={"center"} sx={{ color: "green" }}>{loading.toUpperCase()}</Box>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color='success'
          sx={{ mt: 3, mb: 2 }}
        >
          Send
        </Button>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
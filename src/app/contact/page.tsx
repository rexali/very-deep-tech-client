"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/components/common/copyright';
import { handleMessageSubmit } from '../messages/utils/handleMessageSubmit';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState('');


  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}

        <Typography component="h1" variant="h5">
          CONTACT US
        </Typography>

        <Box
          component={'form'}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onSubmit={
            async (evt) => {
              setLoading('Sending data');
              await handleMessageSubmit(evt, setSuccess, setError, setLoading);
            }
          }
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
    </ThemeProvider>
  );
}
"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSearchParams } from 'next/navigation';
import { Alert } from '@mui/material';
import { confirmRegistrationAPI } from '../api/confirmRegistrationAPI';
import { Suspense, useState } from 'react'
import Fallback from '@/components/common/fallback';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ConfirmRegistration() {
  const [result, setResult] = useState()
  const email = useSearchParams().get('email');
  const rCode = useSearchParams().get('rCode');


  // TO DO: verify that email and rCode match what are in the database
  React.useEffect(() => {
    //  send the rCode and email to database, to verify
    (async () => {
      setResult(await confirmRegistrationAPI({ email, rCode }));
    })();
  }, [email,rCode])

  return (
    <Suspense fallback={<Fallback/>}>
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" sx={{
        minHeight: 410,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CssBaseline />
        <Box>
          <Typography component="h1" variant="h5">
            {result ? <Alert>Confirmation successful</Alert> : <Alert severity='warning'>Confirmation failed</Alert>}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
    </Suspense>
  );
}
"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { AuthContext } from '@/context/AuthContext';
import { AppContext } from '@/context/AppContext';
import { getMessages } from '@/store/actions/app-actions';
import { handleCreateMessageAPI } from '../api/handleCreateMessageAPI';

const defaultTheme = createTheme();

export default function EditMessage({ message, callback }: { message: any, callback: any }) {
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');
    const { state: { user } } = React.useContext(AuthContext);
    const { dispatch } = React.useContext(AppContext);
    

    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                        component="form"
                        noValidate sx={{ mt: 1 }}
                        onSubmit={async (evt) => {
                            await handleCreateMessageAPI(evt, setSuccess, setError, user?.userId);
                            callback(false);
                        }}
                    >      
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Subject"
                            name="title"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            multiline
                            fullWidth
                            name="comment"
                            label="Message"
                            type="text"
                            id="comment"
                        />
                        {success && <Box textAlign={'center'} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                        {error && <Box textAlign={'center'} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color='success'
                        >
                            Send
                        </Button>
                    </Box>
            </Container>
        </ThemeProvider>
    );
}
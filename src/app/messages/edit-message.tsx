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
import Cancel from '@mui/icons-material/Cancel';
import { handleUpdateMessageAPI } from './api/handleUpdateMessageAPI';
import { AppContext } from '@/context/AppContext';
import { getMessages } from '@/store/actions/app-actions';
import { getMessagesAPI } from './api/getMessagesAPI';

const defaultTheme = createTheme();

export default function EditMessage({ message, callback }: { message: any, callback: any }) {
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');
    const [firstName,] = React.useState(message.firstName);
    const [lastName,] = React.useState(message.lastName);
    const [email,] = React.useState(message.email);
    const [messageId,] = React.useState(message.messageId);
    const [subject,] = React.useState(message.subject);
    const [msg,] = React.useState(message.message);
    const { state: { user } } = React.useContext(AuthContext);
    const { dispatch } = React.useContext(AppContext);
    

    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box>
                    <Typography component="h1" variant="h5" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span>Edit Message</span>
                        <span onClick={() => callback(false)}><Cancel /></span>
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={{ mt: 1 }}
                        onSubmit={async (evt) => {
                            await handleUpdateMessageAPI(evt, setSuccess, setError, user?.userId);
                            callback(false);
                            dispatch(getMessages(await getMessagesAPI()))
                        }}
                    >
                        <TextField
                            id="firstName"
                            name='firstName'
                            defaultValue={firstName}
                            hidden
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            defaultValue={lastName}
                            hidden
                        />
                        <TextField
                            id="messageId"
                            name="messageId"
                            defaultValue={messageId}
                            hidden
                        />
                        <TextField
                            id="email"
                            name="email"
                            defaultValue={email}
                            hidden
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Subject"
                            name="subject"
                            defaultValue={subject}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            multiline
                            fullWidth
                            name="message"
                            defaultValue={msg}
                            label="Message"
                            type="text"
                            id="message_body"
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
                            Update
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
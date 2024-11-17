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
import RemoveIcon from '@mui/icons-material/Cancel';
import { handleUpdateNotificationAPI } from './api/handleUpdateNotificationAPI';
import { AppContext } from '@/context/AppContext';
import { getNotifications } from '@/store/actions/app-actions';
import { getNotificationAPI } from './api/getNotificationsAPI';

const defaultTheme = createTheme();

export default function EditNotification({ notification, callback }: { callback: any, notification: any }) {
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');
    const [title,] = React.useState(notification.subject);
    const [body,] = React.useState(notification.body);
    const [notificationId,] = React.useState(notification.notificationId);
    const { state: { user } } = React.useContext(AuthContext);
    const { dispatch } = React.useContext(AppContext);


    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box>
                    <Typography component="h1" variant="h5" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span>Edit notification</span>
                        <span onClick={() => callback(false)}><RemoveIcon /></span>
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={{ mt: 1 }}
                        onSubmit={async (evt) => {
                            await handleUpdateNotificationAPI(evt, setSuccess, setError, user?.userId);
                            callback(false);
                            dispatch(getNotifications(await getNotificationAPI()));
                        }}
                    >
                        <TextField
                            id="notificationId"
                            name="notificationId"
                            defaultValue={notificationId}
                            hidden
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            defaultValue={title}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            multiline
                            fullWidth
                            name="body"
                            defaultValue={body}
                            label="Message"
                            type="text"
                            id="notification_body"
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
'use client'

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingReviewFormms() {
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');

    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box sx={{ width: "100%", }}>
            <Box
            // sx={{ width: "100%",}}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}

            </Box>
           
            <Box
                component="form"
                //   onSubmit={(evt) => handleContactSubmit(evt, setSuccess, setError)} 
                noValidate sx={{ mt: 1 }}
            // width={"100%"}
            >

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type='default'
                    id="message"
                    multiline
                />
                {success && <Box textAlign={"center"} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                {error && <Box textAlign={"center"} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='success'
                    sx={{ mt: 3, mb: 2 }}
                >
                    Post
                </Button>

            </Box>
        </Box>
    );
}
'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ReviewForm from './ReviewForm';
import { getToken } from '@/utils/getToken';

export default function RatingReviewForm(props:any) {
  const [value, setValue] = React.useState<number | null>(1);
  const userId = getToken("_id") ?? "6712c927857f3a3b3492459f";
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Rate this product</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <ReviewForm productId={props.productId} userId={userId} ratingScore={value} />
    </Box>
  );
}
'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function SidebarFilter() {
    const [range, setRange] = useState<string>('0-5000');

    const handlePriceRange = (event: any) => {
        const { value } = event.target;
        setRange(value);
        const prices = range.split('-').map(price => price.trim()).filter(price => price !== '');
        alert(prices[0] + ', ' + prices[1]);
    }


    return (
        <ErrorBoundary>
            <FormControl sx={{ m: 2 }}>
                <FormLabel id='payment_method'>Price Range</FormLabel>
                <RadioGroup
                    aria-labelledby='demo-controlled-radio-button-group'
                    name='price_range'
                    value={range}
                    onChange={handlePriceRange}
                >
                    <FormControlLabel value={'0-5000'} control={<Radio />} label='N 0 - 5000'></FormControlLabel>
                    <FormControlLabel value={'5000-10000'} control={<Radio />} label='N 5000 - 10000'></FormControlLabel>
                    <FormControlLabel value={'10000-50000'} control={<Radio />} label='N 10000 - 50000'></FormControlLabel>
                    <FormControlLabel value={'50000-100000'} control={<Radio />} label='N 50000 - 100000'></FormControlLabel>
                    <FormControlLabel value={'100000-above'} control={<Radio />} label='N 100000 - above'></FormControlLabel>
                </RadioGroup>
            </FormControl>
        </ErrorBoundary>
    )
}

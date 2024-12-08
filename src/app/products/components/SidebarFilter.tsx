'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function SidebarFilter() {
    const [range, setRange] = useState<any>(0);
    return (
        <ErrorBoundary>
            <FormControl>
                <FormLabel id='payment_method'>Price Range</FormLabel>
                <RadioGroup
                    aria-labelledby='demo-controlled-radio-button-group'
                    name='payment_method'
                    value={range}
                    onChange={(evt) => {
                        const { value } = evt.target;
                        setRange(value);
                    }}
                >
                    <FormControlLabel value={'0-5000'} control={<Radio />} label='N 0 - 5000'></FormControlLabel>
                    <FormControlLabel value={'5000-10000'} control={<Radio />} label='N 5000 - 10000'></FormControlLabel>
                    <FormControlLabel value={'10000-50000'} control={<Checkbox />} label='N 10000 - 50000'></FormControlLabel>
                    <FormControlLabel value={'50000-100000'} control={<Radio />} label='N 50000 - 100000'></FormControlLabel>
                    <FormControlLabel value={'100000-above'} control={<Radio />} label='N 100000 - above'></FormControlLabel>
                </RadioGroup>
            </FormControl>
        </ErrorBoundary>
    )
}

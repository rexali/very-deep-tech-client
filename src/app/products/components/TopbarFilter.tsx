'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import {Select, FormControl, InputLabel, MenuItem } from '@mui/material';

export default function TopbarFilter() {
    const [query, setQuery]= useState('');

    return (
        <ErrorBoundary>
            <FormControl><InputLabel id='filter'>Sort</InputLabel></FormControl>
            <Select
                labelId='sort'
                id='sortitem'
                value={query}
                label={'Sort'}
                onChange={(event) => { 
                    const {name,value} =event.target;
                    setQuery(value)
                }}
            >
                <MenuItem>Low</MenuItem>
                <MenuItem>High</MenuItem>
                <MenuItem>A-Z</MenuItem>
                <MenuItem>Z-A</MenuItem>
            </Select>
        </ErrorBoundary>
    )
}

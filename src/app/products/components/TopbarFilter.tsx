'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material';

export default function TopbarFilter() {
    const [query, setQuery] = useState('');

    const handleFilter = (query: string) => {
        switch (query) {
            case 'low':
                alert(query);
                break;
            case 'high':
                alert(query);

                break;
            case 'ascend':
                alert(query);

                break;
            case 'descend':
                alert(query);

                break;
            default:

                break;
        }
    }

    return (
        <ErrorBoundary>
            <Box sx={{ minWidth: 100 }}>
                <FormControl>
                    <InputLabel id='filter'>Sort</InputLabel>
                    <Select
                        labelId='sort'
                        id='sortitem'
                        size='small'
                        value={query}
                        label={'Sort'}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            setQuery(value);
                            handleFilter(query);
                        }}
                    // sx={{ height: 20 }}
                    >
                        <MenuItem value={'low'}>Low</MenuItem>
                        <MenuItem value={'high'}>High</MenuItem>
                        <MenuItem value={'ascend'}>A-Z</MenuItem>
                        <MenuItem value={'descend'}>Z-A</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </ErrorBoundary>
    )
}

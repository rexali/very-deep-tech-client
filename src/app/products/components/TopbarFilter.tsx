'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material';

export default function TopbarFilter() {
    const [query, setQuery] = useState('');

    const handleFilter = (event: any) => {
        const { value }: { value: string } = event.target;
        switch (value) {
            case 'low':
                alert(value);
                break;
            case 'high':
                alert(value);

                break;
            case 'ascend':
                alert(value);

                break;
            case 'descend':
                alert(value);

                break;
            default:

                break;
        }
    }

    return (
        <ErrorBoundary>
            <Box sx={{ minWidth: 100 }}>
                <FormControl>
                    <InputLabel id='filterLabel'>Sort</InputLabel>
                    <Select
                        labelId='sort'
                        id='sort_item'
                        name='sort_item'
                        size='small'
                        value={query}
                        label={'Sort'}
                        onChange={handleFilter}
                    >
                        <MenuItem value={'low'}>Lowest Price</MenuItem>
                        <MenuItem value={'high'}>Highest Price</MenuItem>
                        <MenuItem value={'ascend'}>Name (A-Z)</MenuItem>
                        <MenuItem value={'descend'}>Name (Z-A)</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </ErrorBoundary>
    )
}

'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material';
import { getSortedProductsAPI } from '../api/getSortedProductsAPI';

export default function TopbarFilter(props: any) {
    const [query, setQuery] = useState('');

    const handleFilter = async (event: any) => {
        const { value }: { value: string } = event.target;
        props.handleSetProducts(await getSortedProductsAPI(value));
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
                        <MenuItem value={''}>Sort by</MenuItem>
                        <MenuItem value={'low'}>Low - high Price</MenuItem>
                        <MenuItem value={'high'}>High - low Price </MenuItem>
                        <MenuItem value={'asc'}>Name (A-Z)</MenuItem>
                        <MenuItem value={'desc'}>Name (Z-A)</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </ErrorBoundary>
    )
}

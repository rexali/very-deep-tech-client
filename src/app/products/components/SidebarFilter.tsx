'use client'
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Box } from '@mui/material';
import SideDrawer from '@/components/common/side-drawer';
import ProductList from '../ProductList';
import ReactPagination from "@/components/react-pagination";
import { useFilterData } from '../hooks/useFilterData';
import Fallback from '@/components/common/fallback';


export default function SidebarFilter(props: any) {
    const [range, setRange] = useState<string>('');
    const [activePage, setActivePage] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const prices = range?.split('-').map(price => price.trim()).filter(price => price !== '');
    const { data } = useFilterData(activePage, prices);

    const handlePriceRange = (event: any) => {
        const { value }: { value: string } = event.target;
        setRange(value);
        setOpen(true);
    }

    const handleOpenCallback = (value: boolean) => {
        setOpen(value);
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
            {
                open && <SideDrawer searchCallback={handleOpenCallback}>
                    <Box>Sorting result:</Box>

                    {!data?.length && <Fallback item={'No product found yet. Wait..'} />}

                    <ProductList products={data} />
                    <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                        <ReactPagination
                            activePage={activePage}
                            itemsCountPerPage={4}
                            totalItemsCount={data[0]?.totalProducts}
                            pageRangeDisplayed={5}
                            onchangeCallback={(v: any) => setActivePage(v)} />
                    </Box>
                </SideDrawer>
            }
        </ErrorBoundary>
    )
}

'use client'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { instantSearchProductAPI } from './api/instantSearchAPI';
import Link from 'next/link';


export default function SearchCard() {
  const [data, setData] = React.useState([]);
  return (
    <Paper
      component="form"
      sx={{ p: '2px 2px', maxWidth: 300, mt: 10, marginLeft: "auto", marginRight: "auto" }}
      action={"/search"}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products"
        inputProps={{ 'aria-label': 'search products' }}
        name='term'
        onInput={async (event) => {
          const { value } = event.target as any;
          setData(await instantSearchProductAPI(value));
        }
        }
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
      <Paper>
        {
          data?.map((name, i) => <Link key={i} style={{ textDecoration: "none", margin: 1, display: "block" }} href={"/search?term=" + name}>{name}</Link>)
        }
      </Paper>
    </Paper>
  );
}
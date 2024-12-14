'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getUsersProductsAPI } from "./api/getUsersProductsAPI";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import Link from "next/link";
import Favourite from '@mui/icons-material/Favorite';


export default function UsersProducts() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      try {
        const products = await getUsersProductsAPI(activePage);
        setData(products);
      } catch (error) {
        console.log(error);
      }

    }

    getData();

  }, [activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No product(s) found</Box>
      </Container>
    )
  }

  return (
    <Box sx={{ mt: 10 }}>
      <Box>Total Products: {data[0]?.totalProducts}</Box>
      {/* <ProductList products={data} role={'admin'} /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S/N </TableCell>
              <TableCell align="right">product Name</TableCell>
              <TableCell align="right">Date (n) Time &nbsp;</TableCell>
              <TableCell align="right">Owner&apos;email</TableCell>
              <TableCell align="right">Approve</TableCell>
              <TableCell align="right">Edit &nbsp;</TableCell>
              <TableCell align="right">Delete &nbsp;</TableCell>
              <TableCell align="right">Promote &nbsp;</TableCell>
              <TableCell align="right">View &nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product: any, i: number) => (
              <TableRow
                key={product._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{i + 1}</TableCell>
                <TableCell align="right">{product?.product_name}</TableCell>
                <TableCell align="right">{product?.createdAt ?? '12-12-24'}</TableCell>
                <TableCell align="right">
                  <Link href={`mailto:${product?.user?.email}`}>{product?.user?.email}</Link>
                </TableCell>
                <TableCell align="center"><Button size="small" onClick={() => { alert(product._id) }}>Approve</Button></TableCell>
                <TableCell align="center"><Button size="small" onClick={() => { alert(product._id) }}>Edit</Button></TableCell>
                <TableCell align="center"><Button size="small" onClick={() => { alert(product._id) }}>Delete</Button></TableCell>
                <TableCell align="center"><Button size="small" onClick={() => { alert(product._id) }}>Promote</Button></TableCell>
                <TableCell align="center">
                  <Link href={'/products/' + product?._id}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data[0]?.totalProducts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Box>
  )
}

'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
// import { useCarts } from "../carts/hooks/useCarts";
import { AppContext } from "@/context/AppContext";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import Link from "next/link";
import { useCarts } from "../checkout/hooks/useCarts";

export default function UsersCarts() {
  const [activePage, setActivePage] = React.useState<number>(1);
  const { dispatch } = React.useContext(AppContext);
  const { carts } = useCarts(dispatch, activePage);

  if (!carts?.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item(s) in cart</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 8, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      <Box>Total Carts: {carts[0]?.totalCarts}</Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S/N </TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Date (n) Time &nbsp;</TableCell>
              <TableCell align="right">Owner&apos;email</TableCell>
              <TableCell align="right">View &nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((product: any, i: number) => (
              <TableRow
                key={product._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{i + 1}</TableCell>
                <TableCell align="right">{product?.product_name}</TableCell>
                <TableCell align="right">{product?.cartCreatedAt}</TableCell>
                <TableCell align="right">
                  <Link href={`mailto:${product?.cartOwner}`}>{product?.cartOwner}</Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={'/products/' + product?._id}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={4} display={"flex"} justifyContent={'center'}>
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={carts[0]?.totalCarts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}

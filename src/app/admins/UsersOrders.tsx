import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactPagination from '@/components/react-pagination';
import Box from '@mui/material/Box';
import { getUsersOrdersAPI } from './api/getUsersOrders';
import Container from '@mui/material/Container';
import Link from 'next/link';


export default function UsersOrders() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      try {
        setData(await getUsersOrdersAPI(activePage));
      } catch (error) {
        console.warn(error);
        
      }
      
    }
    getData();

  }, [activePage])

  if (!data?.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No order(s) found</Box>
      </Container>
    )
  }

  return (
    <Box >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Box>Total Orders: {data[0]?.totalOrders}</Box>
          <TableHead>
            <TableRow>
              <TableCell>User&apos;email</TableCell>
              <TableCell align="right">Order status</TableCell>
              <TableCell align="right">Date (n) Time &nbsp;</TableCell>
              <TableCell align="right">Total &nbsp;</TableCell>
              <TableCell align="right">Payment status &nbsp;</TableCell>
              <TableCell align="right">View &nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((order: any) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="order">
                  <Link href={`mailto:${order?.user?.email}`}>{order?.user?.email}</Link>
                </TableCell>
                <TableCell align="right">{order?.orderStatus ?? 'pending'}</TableCell>
                <TableCell align="right">{order?.createdAt ?? '12-12-24'}</TableCell>
                <TableCell align="right">{order?.total}</TableCell>
                <TableCell align="right">{order?.paymentStatus}</TableCell>
                <TableCell align="right">
                  <Link href={'/orders/' + order._id}>View</Link>
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
          totalItemsCount={data[0]?.totalOrders}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Box>
  );
}
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
import { getUsersHistoryAPI } from './api/getUsersHistory';
import Container from '@mui/material/Container';
import Link from 'next/link';


export default function UsersTransactions() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      setData(await getUsersHistoryAPI(activePage));
    }
    getData();

  }, [activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No transaction(s) found</Box>
      </Container>
    )
  }

  return (
    <Box>
      <Box>Total Transactions: {data[0]?.totalTransactions}</Box>
      <Box>Total Amount: {data[0]?.totalAmount}</Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Time &nbsp;</TableCell>
              <TableCell align="right">Amount &nbsp;</TableCell>
              <TableCell align="right">User &nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((transaction: any) => (
              <TableRow
                key={transaction._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{transaction?.createdAt ?? '12-12-24'}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">
                  <Link href={`mailto:${transaction?.user?.email}`}>{transaction?.user?.email}</Link>
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
          totalItemsCount={data[0]?.totalTransactions}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Box>
  );
}
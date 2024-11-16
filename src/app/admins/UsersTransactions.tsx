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


export default function UsersTransactions() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    async function getData() {
      setData(await getUsersHistoryAPI(activePage));
    }
    getData();

  }, [activePage])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Time&nbsp;</TableCell>
            <TableCell align="right">Amount&nbsp;</TableCell>
            <TableCell align="right">User&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((transaction: any) => (
            <TableRow
              key={transaction._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="transaction">
                {transaction.order?.items[0]?.product?.product_name ?? 'Product name instead'}
              </TableCell>
              <TableCell align="right">{transaction?.createdAt ?? '12-12-24'}</TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
              <TableCell align="right">{transaction.user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table><br />
      <Box sx={{ mr: "auto", ml: "auto", maxWidth: 100 }} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data?.length}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </TableContainer>
  );
}
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
import { getUsersProfilesAPI } from './api/getUsersProfilesAPI';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function UsersProfiles() {
  const [data, setData] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(()=>{
       async function getData(){
        setData(await getUsersProfilesAPI(activePage));
       }
       getData();

  },[activePage])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">State&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((profile: any) => (
            <TableRow
              key={profile.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="profile">
                {profile.firtstName + ' ' + profile.lastName}
              </TableCell>
              <TableCell align="right"><link href={`mailto:${profile.user.email}`}>{profile.user.email}</link></TableCell>
              <TableCell align="right">{profile.State}</TableCell>
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
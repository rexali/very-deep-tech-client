'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import { getToken } from "@/utils/getToken";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { useAuth } from "@/hooks/use-auth";
import { getUserHistoryAPI } from "../users/api/getUserHistory";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Link from "next/link";

export default function UserHistory() {
    const [data, setData] = React.useState<any>([]);
    const [activePage, setActivePage] = React.useState(1);


    const auth = useAuth();
    const userId = auth.user?._id as unknown as string || getToken('_id') as string;

    React.useEffect(() => {
        async function getData() {
            const transactions = await getUserHistoryAPI(userId, activePage);
            setData(transactions);
        }

        getData();

    }, [userId, activePage]);

    if (!data.length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No transaction(s) found</Box>
            </Container>
        )
    }

    return (
        <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Type &nbsp;</TableCell>
                            <TableCell align="right">Time &nbsp;</TableCell>
                            <TableCell align="right">Currency &nbsp;</TableCell>
                            <TableCell align="right">Amount &nbsp;</TableCell>
                            <TableCell align="right">Payment Method &nbsp;</TableCell>
                            <TableCell align="right">Reference &nbsp;</TableCell>
                            <TableCell align="right">Action &nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((transaction: any) => (
                            <TableRow
                                key={transaction._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                < TableCell align="right">{transaction?.type ?? '12-12-24'}</TableCell>
                                <TableCell align="right">{transaction?.createdAt ?? '12-12-24'}</TableCell>
                                <TableCell align="right">{transaction.currency}</TableCell>
                                <TableCell align="right">{transaction.amount}</TableCell>
                                <TableCell align="right">{transaction.paymentMethod}</TableCell>
                                <TableCell align="right">{transaction.referance}</TableCell>
                                <TableCell align="right">
                                    <Link href={'/orders/' + transaction?.order?._id}>View order</Link>
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
        </Container>
    )
}
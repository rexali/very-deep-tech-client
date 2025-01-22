'use client';

import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useCallback } from "react";
import { getUsersHistoryAPI } from "./api/getUsersHistory";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function ReportPage() {
  const [data, setData] = React.useState<any>([]);

  const getData = useCallback(async function getData() {
    try {
      let data = await getUsersHistoryAPI();
      setData(data.transactions);
    } catch (error) {
      console.error(error);
    }
  }, [])

  React.useEffect(() => {
    getData();
  }, []);

  const testData = [
    ["Day", "Sales"],
    ["Monday", 1000],
    ["Tuesday", 1170],
    ["Wednesday", 660],
    ["Thursday", 1030],
    ["Friday", 800],
  ];

  const getTotalSales = (data: any) => {

    return data.slice(1,).map((d: any) => d[1]).reduce((prev: any, curr: any) => prev + curr, 0);
  }

  const dailyTotalSales = getTotalSales(data.generateSalesReportObj);
  const weeklyTotalSales = getTotalSales(data.generateWeeklySalesReportObj);
  const monthlyTotalSales = getTotalSales(data.generateMonthlySalesReportObj);
  const quarterlyTotalSales = getTotalSales(data.generateQuarterlySalesReportObj);
  const yearlyTotalSales = getTotalSales(testData);

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={4}>
          <p>Daily Sales</p>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Day</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateSalesReportObj.slice(1,).map((data: any, i: number) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{data[0]}</TableCell>
                      <TableCell align="right">{data[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {dailyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <p>Weekly Sales</p>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Week</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateWeeklyReportObj.slice(1,).map((data: any, i: number) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{data[0]}</TableCell>
                      <TableCell align="right">{data[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {weeklyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <p>Monthly Sales</p>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Month</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateMonthlyReportObj.slice(1,).map((data: any, i: number) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{data[0]}</TableCell>
                      <TableCell align="right">{data[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {monthlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <p>Quarterly Sales</p>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Quarter</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateQuarterlyReportObj.slice(1,).map((data: any, i: number) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{data[0]}</TableCell>
                      <TableCell align="right">{data[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {quarterlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <p>Yearly Sales</p>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Year</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testData.slice(1,).map((data: any, i: number) => (
                    <TableRow
                      key={data._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{data[0]}</TableCell>
                      <TableCell align="right">{data[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {yearlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </ErrorBoundary>
  )
}

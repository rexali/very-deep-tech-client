'use client';

import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useCallback } from "react";
import { getUsersHistoryAPI } from "./api/getUsersHistory";
import ErrorBoundary from "@/components/ErrorBoundary";
import HomeFallback from "@/components/common/HomeFallback";

export default function ReportPage() {
  const [data, setData] = React.useState<any>({});

  const getData = useCallback(async () => {
    try {
      let data = await getUsersHistoryAPI();
      setData(data);
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

    return data?.slice(1,).map((d: any) => d[1]).reduce((prev: any, curr: any) => Number(prev) + Number(curr), 0);
  }

  const dailyTotalSales = getTotalSales(data?.generateSalesReportObj);
  const dayTotalSales = getTotalSales(data?.generateDaySalesReportObj);
  const monToSunTotalSales = getTotalSales(data?.generateMondayToSundaySalesReportObj);
  const weeklyTotalSales = getTotalSales(data?.generateWeeklySalesReportObj);
  const monthlyTotalSales = getTotalSales(data?.generateMonthlySalesReportObj);
  const quarterlyTotalSales = getTotalSales(data?.generateQuarterlySalesReportObj);
  const yearlyTotalSales = getTotalSales(data?.generateYearlySalesReportObj);
  const testTotalSales = getTotalSales(testData);

  console.log(data);

  if (!Object.keys(data)) {
    return <HomeFallback />
  }

  return (
    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Daily Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Day</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data?.generateSalesReportObj)?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "day"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"day"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {dailyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Daily Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Day</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data?.generateDaySalesReportObj)?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "day"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"day"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {dayTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Daily Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Day</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data?.generateMondayToSundaySalesReportObj)?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "day"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"day"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {monToSunTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Weekly Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Week</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateWeeklySalesReportObj?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + 'week'}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"week"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {weeklyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Monthly Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Month</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateMonthlySalesReportObj?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "month"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"month"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {monthlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Quarterly Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth:320}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Quarter</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateQuarterlySalesReportObj?.slice(1,)?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "quarter"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{new Date(da[0])?.getMonth()}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"quarter"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {quarterlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Yearly Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth:320 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Year</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.generateYearlySalesReportObj?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "year"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"year"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {yearlyTotalSales} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ m: 5 }}>Test Sales</Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth:320 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Year</TableCell>
                    <TableCell align="right">Sales (&#x20A6;) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testData?.map((da: any, i: number) => (
                    <TableRow
                      key={i + "year"}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{da[0]}</TableCell>
                      <TableCell align="right">{da[1]}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"year"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">&#x20A6; {testTotalSales} </TableCell>
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

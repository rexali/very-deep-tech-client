'use client';

import { Container, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { Chart } from "react-google-charts";
import { getUsersHistoryAPI } from "./api/getUsersHistory";
import ErrorBoundary from "@/components/ErrorBoundary";
import HomeFallback from "@/components/common/HomeFallback";
// import { BarChart } from "@mui/x-charts/BarChart";

export default function AnalyticsPage() {
  const [data, setData] = React.useState<any>({});

  const testData = [
    ["Day", "Sales"],
    ["Monday", 1000],
    ["Tuesday", 1170],
    ["Wednesday", 660],
    ["Thursday", 1030],
    ["Friday", 800],
  ];

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

  console.log(data);

  const options = {
    title: "Sales from Monday to Friday",
    hAxis: { title: "Day" },
    vAxis: { title: "Sales" },
    legend: "none",
  };

  const optionDay = {
    title: "Daily Sales",
    hAxis: { title: "Day" },
    vAxis: { title: "Sales" },
    legend: "none",
  };


  const optionWeek = {
    title: "Week Sales",
    hAxis: { title: "Week" },
    vAxis: { title: "Sales" },
    legend: "none",
  };

  const optionMonth = {
    title: "Monthly Sales",
    hAxis: { title: "Month" },
    vAxis: { title: "Sales" },
    legend: "none",
  };


  const optionQuarter = {
    title: "Quarterly Sales",
    hAxis: { title: "Quarter" },
    vAxis: { title: "Sales" },
    legend: "none",
  };


  const optionYear = {
    title: "Yearly Sales",
    hAxis: { title: "Year" },
    vAxis: { title: "Sales" },
    legend: "none",
  };

  if (!Object.keys(data)) {
    return <HomeFallback />
  }

  return (

    <ErrorBoundary>
      <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={4}>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Daily Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateSalesReportObj}
              options={optionDay}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Weekly Sales</p>
            {/* <BarChart xAxis={[{
              id: "barCategories",
              scaleType: 'band',
              data: data.generateWeeklySalesReportObj?.slice(1,)?.map((el: any) => el[0])}]}
              series={[{ data: data.generateWeeklySalesReportObj?.slice(1,)?.map((el: any) => el[1])}]}
              width={500}
              height={300} /> */}
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateWeeklySalesReportObj}
              options={optionWeek}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Monthly Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateMonthlySalesReportObj}
              options={optionMonth}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Quarterly Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateQuarterlySalesReportObj}
              options={optionQuarter}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Yearly Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={testData}
              options={optionYear}
            />
          </Grid>
        </Grid>
      </Container>
    </ErrorBoundary>
  )
}

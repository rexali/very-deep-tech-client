'use client';

import { Container, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { Chart } from "react-google-charts";
import { getUsersHistoryAPI } from "./api/getUsersHistory";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function AnalyticsPage() {
  const [data, setData] = React.useState<any>([]);

  const testData = [
    ["Day", "Sales"],
    ["Monday", 1000],
    ["Tuesday", 1170],
    ["Wednesday", 660],
    ["Thursday", 1030],
    ["Friday", 800],
  ];

  const getData = useCallback(async function getData() {
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
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateWeeklyReportObj}
              options={optionWeek}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Monthly Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateMonthlyReportObj}
              options={optionMonth}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Quarterly Sales</p>
            <Chart
              chartType='ColumnChart'
              width="100%"
              height="400px"
              data={data.generateQuarterlyReportObj}
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

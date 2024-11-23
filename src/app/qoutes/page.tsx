'use client'

import { Container } from "@mui/material";
import QouteList from "./QouteList";
import React, {useState} from "react";
import { getQoutesAPI } from "./api/getQoutesAPI";

export default function QoutesPage() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = React.useState(1);

  (async () => {
    setData(await getQoutesAPI(activePage));
  })()

  return (
    <Container component={'main'} sx={{ mt: 10 }}>
      <QouteList qoutes={data} activePage={activePage} setActivePage={setActivePage} />
    </Container>
  )
}

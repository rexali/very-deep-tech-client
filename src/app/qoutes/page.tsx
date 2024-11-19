'use client'

import { Container } from "@mui/material";
import QouteList from "./QouteList";
import React, {useState} from "react";
import { getQoutesAPI } from "./api/getQoutesAPI";

export default function QoutesPage() {
  const [data, setData] = useState([]);

  (async () => {
    setData(await getQoutesAPI());
  })()

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <QouteList qoutes={data} />
    </Container>
  )
}

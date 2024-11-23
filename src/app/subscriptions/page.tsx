'use client'

import { Container } from "@mui/material";
import QouteList from "./SubscriptionList";
import React, {useState} from "react";
import { getQoutesAPI } from "../qoutes/api/getQoutesAPI";

export default function QoutesPage() {
  const [data, setData] = useState([]);

  (async () => {
    setData(await getQoutesAPI());
  })()

  return (
    <Container component={'main'} sx={{ mt: 10 }}>
      <QouteList qoutes={data} />
    </Container>
  )
}

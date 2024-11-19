import { Container } from "@mui/material";
import QouteList from "./QouteList";
import * as React from "react";
import { getQoutesAPI } from "./api/getQoutesAPI";

export default function QoutesPage() {
  const [data, setData] = React.useState([]);

  (async () => {
    setData(await getQoutesAPI());
  })()

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
      <QouteList qoutes={data} />
    </Container>
  )
}

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import React from "react"

export default function MarketingMessage() {

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1
      }}>
        <Paper>
          <Typography sx={{padding:2, textAlign:"center", fontWeight:'bold'}}>
            Want to get good value and price for any item you order? Let Cshop help you today.
          </Typography>
        </Paper>
        <br />
        <Typography>
          We help individuals or businesses who want to provide goods and items they need for their daily operation, so they can focus
          on other aspects of their lives or business operations that bring in lucrative incomes and revenues, 
          and stop worrying about how to eliminate or alleviate the social problem.
        </Typography>
      </Box>
    </Container>
  )
}

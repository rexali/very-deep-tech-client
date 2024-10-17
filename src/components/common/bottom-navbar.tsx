'use client'

import React from "react"
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Share from "@mui/icons-material/Share";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import { useMediaQuery } from "react-responsive";
import { shareLink } from "@/utils/shareLink";

export default function BottomNavbar() {
    const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });


    return (
        <Container component="main" maxWidth="lg" sx={{mt:5,}} >
            {isMobile && <Box sx={{
                display:"flex",
                flexDirection:"row", 
                justifyContent:"space-around", 
                position: "fixed", 
                bottom: 0, 
                left: 0, 
                right: 0, 
                bgcolor:'green'
                }}>
                <Button sx={{p:1}} key={'share'} onClick={()=>shareLink()} startIcon={<Share sx={{color:"white"}} />}></Button>
                <Button sx={{p:1}} key={"email"} href="mailto:alybaba2009@gmail.com"  startIcon={<Email sx={{color:"white"}} />}></Button>
                <Button sx={{p:1}} key={"tel"} href="tel:08065899144" startIcon={<Phone sx={{color:"white"}}/>}></Button>
                <Button sx={{p:1}} key={"loc"} href="http://maps.google.com/?q= 19 Almubarak Waqf Foundation, Guda Abdullahi Road, Farm Center, Kano State" startIcon={<Place sx={{color:"white"}} />}></Button>
            </Box>}
        </Container>
    )
}

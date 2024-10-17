// "use client"

// import Container from "@mui/material/Container";
// // import WaqfList from "../waqfs/waqf-list";
// import Grid from "@mui/material/Grid";
// import { useWaqf } from "@/hooks/use-waqf";
// import DonateModal from "@/components/common/donate-modal";
// // import DonateForm from "../waqfs/components/donate-form";
// import * as  React from "react";
// import Box from "@mui/material/Box";
// import Link from "next/link";

// export default function FeaturedWaqfs() {

//     const [open, setOpen] = React.useState(false);

//     const [waqfId, setWaqfId] = React.useState();

//     const openCallback = (val: boolean, waqfId: any) => {
//         setWaqfId(waqfId);
//         setOpen(val);
//     }
  
//     const waqfs = useWaqf();

//     if (!waqfs?.length) {

//         return (
//             <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
//                 <Box textAlign={'center'}>No featured waqf found</Box>
//             </Container>
//         )
//     }

//     return (
//         <Container component="main" maxWidth="md" >
//             <h2>Featured</h2>
//             <Box m={5} >
//                 <Grid container spacing={2} columnSpacing={1}>
//                     <WaqfList waqfs={waqfs.slice(0, 2)} openCallback={openCallback} />
//                 </Grid>
//             </Box>
//             {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={waqfId} /></DonateModal>}
//             <Box m={5} textAlign='center' >
//                 <Link href="/waqfs" prefetch style={{ borderRadius: 10, color: "white", textDecoration: "none", padding: 10, backgroundColor: "green" }}>VIEW MORE</Link>
//             </Box>
//         </Container>
//     )
// }
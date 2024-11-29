'use client'

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ReactPagination from "@/components/react-pagination";
import QouteCard from "./QouteCard";

export default function QouteList(props: any) {

    return (
        <div>
            {
                props.qoutes?.map((qoute: any, index: any) =>
                    <Grid item xs={12} md={6} key={qoute._id + index}>
                        <QouteCard qoute={qoute} />
                    </Grid>

                )
            }
            <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                <ReactPagination
                    activePage={props?.activePage}
                    itemsCountPerPage={4}
                    totalItemsCount={props?.qoutes[0]?.totalQoutes}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => props.setActivePage(v)} />
            </Box>
        </div>
    )

}
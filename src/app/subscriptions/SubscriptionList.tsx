'use client'

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ReactPagination from "@/components/react-pagination";
import SubscriptionCard from "./SubscriptionCard";

export default function SubscriptionList(props: any) {

    return (
        <div>
            {
                props.subscriptions?.map((subscription: any, index: any) =>
                    <Grid item xs={12} md={6} key={subscription._id + index}>
                        <SubscriptionCard subscription={subscription} />
                    </Grid>
                )
            }

            <Box sx={{ mr: "auto", ml: "auto", maxWidth: 100 }} >
                <ReactPagination
                    activePage={props?.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={props?.subscriptions[0]?.totalSubscriptions}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => props.setActivePage(v)} />
            </Box>
        </div>
    )

}
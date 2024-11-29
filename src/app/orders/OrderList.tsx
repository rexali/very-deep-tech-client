'use client'

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import OrderCard from "./OrderCard";
import ReactPagination from "@/components/react-pagination";

export default function OrderList(props: any) {

    return (
        <div>
            {
                props.orders?.map((order: any, index: any) =>
                    <Grid item xs={12} md={6} key={order._id + index}>
                        <OrderCard order={order} />
                    </Grid>

                )
            }

            <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                <ReactPagination
                    activePage={props?.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={props?.orders[0]?.totalOrders}
                    pageRangeDisplayed={5}
                    onchangeCallback={(v: any) => props.setActivePage(v)} />
            </Box>
        </div>
    )

}
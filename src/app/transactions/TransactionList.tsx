'use client'

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import TransactionCard from "./TransactionCard";
import ReactPagination from "@/components/react-pagination";

export default function TransactionList(props: any) {

    return (
        <div>
            {
                props.transactions?.map((transaction: any, index: any) =>
                    <Grid item xs={12} md={6} key={transaction._id + index}>
                        <TransactionCard transaction={transaction} />
                    </Grid>

                )
            }
        </div>
    )

}
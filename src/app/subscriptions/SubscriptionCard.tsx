'use client'
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function SubscriptionCard({ subscription }: { subscription: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href={'mailto:' + subscription?.email}>{subscription?.email}</Link>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
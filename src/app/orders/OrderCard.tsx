import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function OrderCard({ order }: { order: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                        {order.user?.email ?? 'email@ya..'}
                    </Typography>

                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                        N {order?.total ?? 0}
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                        <Link href={'/orders/' + order?._id}>View</Link>
                    </Typography>

                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                        {order?.paymentStatus ?? ''}
                    </Typography>
                </Box>
            </CardContent>
            <Typography gutterBottom fontSize={11} variant="body2" component="div">
                {order?.createdAt ?? '12-12-2024'}
            </Typography>
        </Card>
    )
}
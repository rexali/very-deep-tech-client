import { Card, CardContent, Typography, Box } from "@mui/material";

export default function OrderCard({ order }: { order: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {order.user?.email ?? "aly@yahoo.com"}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        N {order?.total ?? 1000}
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {order.createdAt ?? '12-12-2024'}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {order.paymentStatus ?? 'pending ..'}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}
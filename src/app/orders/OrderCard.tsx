import { Card, CardContent, Typography, Box } from "@mui/material";

export default function OrderCard({ order }: { order: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {order.product.product_name ?? "Lizard"}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        N {order.product.product_price ?? 1000}
                    </Typography>
                </Box>
                <Box>
                <Typography gutterBottom variant="h5" component="div">
                    {order.time ?? '12-12-2024'}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {order.orderStatus ?? 'pending'}
                </Typography>
                </Box>
                
            </CardContent>
        </Card>
    )
}
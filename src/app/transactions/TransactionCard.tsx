import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TransactionCard({ transaction }: { transaction: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {transaction.product.product_name ?? "Lizard"}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        N {transaction.product.product_price ?? 1000}
                    </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                    {transaction.time ?? '12-12-2024'}
                </Typography>
            </CardContent>
        </Card>
    )
}
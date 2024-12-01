import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TransactionCard({ transaction }: { transaction: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom variant="body2" component="div">
                        {transaction?.user.email ?? "Lizard"}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        N {transaction?.amount ?? 1000}
                    </Typography>
                </Box>
                <Typography gutterBottom variant="body2" component="div">
                    {transaction?.createdAt ?? '12-12-2024'}
                </Typography>
            </CardContent>
        </Card>
    )
}
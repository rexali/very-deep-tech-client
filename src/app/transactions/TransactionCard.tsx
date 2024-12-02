import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function TransactionCard({ transaction }: { transaction: any }) {

    return (
        <Box marginTop={4} display={"flex"} justifyContent={'center'}>
            <Card sx={{ maxWidth: 345, margin: 1 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography gutterBottom variant="body2" component="div">
                            <Link href={'mailto:' + transaction?.user.email}>{transaction?.user.email ?? "Lizard"}</Link>
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            N {transaction?.amount ?? 1000}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            {transaction?.createdAt ?? '12-12-2024'}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            <Link href={'/orders/' + transaction?.order._id}>View order</Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
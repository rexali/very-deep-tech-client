import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function QouteCard({ qoute }: { qoute: any }) {

    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href={'mailto:' + qoute?.email}>{qoute?.email}</Link>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href={'tell:' + qoute?.phone}>{qoute?.phone}</Link>
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href={'/products/' + qoute?.product._id}>View Product</Link>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {qoute?.message}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}
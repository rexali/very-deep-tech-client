import { getOrderAPI } from "@/app/admins/api/getOrderAPI";
import { SERVER_URL } from "@/constants/url";
import { CardContent, Box, Typography, Container } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";
import * as React from "react";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch(SERVER_URL + "/orders").then(res => res.json());
  return data.data.orders.map((order: any) => ({
    orderId: order._id
  }))
}

export default async function OrderPage({ params }: { params: { orderId: string } }) {
    const orderId = params.orderId;

       let order = await getOrderAPI(orderId)??{};

    if (!Object.keys(order).length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No order found</Box>
            </Container>
        )
    }


    return (
        <Box marginTop={4} display={"flex"} justifyContent={'center'}>
            <Card sx={{ maxWidth: 345, margin: 1 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                        order.items.map((item: any, i: number) => (
                            <Box key={i}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        {i + 1}
                                    </Typography>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        Qty: {item.quantity}
                                    </Typography>
                                    <Link href={'/products/' + item?.product}>View product</Link>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        N {item.price}
                                    </Typography>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        N {item.total}
                                    </Typography>
                                </Box>
                            </Box>
                        ))
                    }

                    <Box>
                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                            {order.user?.email}
                        </Typography>

                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                            N {order?.total}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                            {order.paymentStatus}
                        </Typography>
                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                            {order.createdAt ?? ''}
                        </Typography>
                    </Box>

                </CardContent>
            </Card>
        </Box>
    )

}
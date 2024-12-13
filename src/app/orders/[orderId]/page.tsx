import { getOrderAPI } from "@/app/admins/api/getOrderAPI";
import { SERVER_URL } from "@/constants/url";
import { CardContent, Box, Typography, Container } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";
import * as React from "react";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
    try {
        const data = await fetch(SERVER_URL + "/orders").then(res => res.json());
        return data.data.orders.map((order: any) => ({
            orderId: order._id
        }))   
    } catch (error) {
        console.warn(error); 
    }
}

export default async function OrderPage({ params }: { params: { orderId: string } }) {
    const orderId = params.orderId;
    let order:any
    try {
        order = await getOrderAPI(orderId) ?? {};  
    } catch (error) {
        console.warn(error); 
    }
   

    if (!Object.keys(order).length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No order found</Box>
            </Container>
        )
    }


    return (
        <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                <Card sx={{ maxWidth: 345, margin: 1 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems:'space-between' }}>
                        {
                            order.items.map((item: any, i: number) => (
                                <Box key={i} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                            {i + 1}
                                        </Typography>
                                        <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                            Quantity: {item?.quantity ?? 1}
                                        </Typography>
                                    </Box>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        <Link href={'/products/' + item?.product}>View product</Link>
                                    </Typography>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        Price:  N {item?.price ?? 0}
                                    </Typography>
                                    <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                        Total:  N {item?.total ?? 0}
                                    </Typography>
                                </Box>
                            ))
                        }

                        <Box>
                            <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                Email:  {order?.user?.email ?? 'email'}
                            </Typography>

                            <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                Total:  N {order?.total ?? 10}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                Payment Status: {order?.paymentStatus ?? 'pendin..'}
                            </Typography>
                            <Typography gutterBottom fontSize={11} variant="body2" component="div">
                                Date:  {order?.createdAt ?? '2024-11-'}
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            </Box>
        </Container>
    )

}
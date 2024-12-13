import { getToken } from "@/utils/getToken";
import { clearUserCartsAPI } from "../carts/api/clearCartsAPI";
import { v4 as uuidV4 } from 'uuid'
import { createOrderAPI } from "../orders/api/createOrderAPI";
import { createTransactionAPI } from "../transactions/api/createTransactionAPI";

export async function sendOrderAndTransaction(
    orderData: any,
    transactionData: any,
    setPostSuccess: any,
    setPostError: any,
    setLoading: any

) {
    let userId = getToken("_id") as string;
    const reference = uuidV4();
    try {
        // payment complete
        // callback to handle add order and transaction data
        let order = await createOrderAPI(orderData);
        setPostSuccess("Order Success");
        let tranxData = {
            ...transactionData,
            orderId: order._id,
            reference: reference,
        };
        setLoading('');
        if (await createTransactionAPI(tranxData)) {
            setPostSuccess("Transaction Success");
            setLoading('')
            await clearUserCartsAPI(orderData.userId ?? userId);
        } else {
            setPostError("Transaction failed");
            setLoading('')
        }

    } catch (error: any) {
        console.warn(error)
        setPostError("Error! " + error.message);
    } finally {
        console.log(reference);
        setTimeout(() => {
            setPostSuccess("");
            setPostError("");
            setLoading('')
        }, 30000);
    }
}
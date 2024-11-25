import { getToken } from "@/utils/getToken";
import { clearUserCartsAPI } from "../carts/api/clearCartsAPI";
import { createOrderAPI } from "../carts/api/createOrderAPI";
import { createTransactionAPI } from "../carts/api/createTransactionAPI";
import  {v4 as uuidV4} from 'uuid'

export async function sendOrderAndTransaction(
    orderData: any,
    transactionData: any,
    setPostSuccess: any,
    setPostError: any,
    setLoading:any

) {
    const userId = getToken("_id") as string;
    const reference=uuidV4();
    try {
        // payment complete
        const orderId = await createOrderAPI(orderData); // callback to handle add order and transaction data
        if (orderId) {
            setPostSuccess("Order success")
            setLoading('')
            console.log("Order success")
            const transactionId = await createTransactionAPI({
                ...transactionData,
                orderId,
                reference: reference,
            });

            if (transactionId) {
                setPostSuccess("Order success");
                setLoading('')
                await clearUserCartsAPI(userId);
            } else {
                console.log("Transaction failed");
                setPostError("Transaction failed");
                setLoading('')
            }

        } else {
            console.log("Order failed");
            setPostError("Transaction failed");
            setLoading('')
        }

    } catch (error:any) {
        console.warn(error)
        setPostError("Error! " + error.message);

    } finally {
        console.log(reference);
    }
}
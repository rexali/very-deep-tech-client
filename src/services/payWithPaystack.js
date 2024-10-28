import { clearUserCartsAPI } from "@/app/carts/api/clearCartsAPI";
import { createTransactionAPI } from "@/app/carts/api/createTransactionAPI";
import { getToken } from "@/utils/getToken";
import PaystackPop from "@paystack/inline-js";

export function payWithPaystack(
    email,
    amount,
    orderCallback,
    transactionData
) {
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: "pk_live_9522ac67d8f164271cafe16df7fc01b4613af4f7",
        email: email,
        amount: amount * 100,
        // endpoint:'http://localhost:3000/webhook',
        onSuccess: async (transaction) => {
            try {
                // payment complete
                const orderId = await orderCallback(); // callback to handle add order and transaction data
                if (orderId) {
                    const transactionId = await createTransactionAPI({
                        ...transactionData,
                        userId,
                        reference: transaction.reference
                    });

                    if (transactionId) {
                        await clearUserCartsAPI(getToken("_id"));
                    } else {
                        console.log("Transaction failed")
                    }

                } else {
                    console.log("Order failed")
                }

            } catch (error) {
                console.warn(error)
            } finally {
                console.log(transaction.reference);
            }

        },
        onCancel: () => {
            // user close pop up
            () => {
                alert("Thank you. If you have any complaint, don't hesitate to send us a message");
            }
        }
    });
}
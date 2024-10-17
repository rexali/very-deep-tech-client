import PaystackPop from "@paystack/inline-js";

export function payWithPaystack(email, amount) {
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: "pk_live_9522ac67d8f164271cafe16df7fc01b4613af4f7",
        email:email,
        amount: amount * 100,
        // endpoint:'http://localhost:3000/webhook',
        onSuccess: (transaction) => {
            // payment complete
            console.log(transaction.reference);
        },
        onCancel: () => {
            // user close pop up
        }
    });
}
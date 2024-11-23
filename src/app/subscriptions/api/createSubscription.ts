import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { SERVER_URL } from "@/constants/url"

async function createSubscription(email: any, setSuccess: any, setError: any) {
    try {
        const result = await fetchData(`${SERVER_URL}/subscriptions`, { body: JSON.stringify({ email: email }), method: "post" });
        if (result.data.subscription._id) {
            setSuccess('SUCCESS');
        } else {
            setError('ERROR');
        }
    } catch (error: any) {
        console.warn(error);
        setError('ERROR! ' + error.message);
    }
}

export {
    createSubscription
}
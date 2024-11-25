import axios from "axios";
import { SERVER_URL } from "@/constants/url"


async function createSubscription(email: any, setSuccess: any, setError: any) {
    try {
        const result = await axios.post(`${SERVER_URL}/subscriptions`, { email }, {
            headers: {
                "Content-Type": 'application/json',
            }
        });
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
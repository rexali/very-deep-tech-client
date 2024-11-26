import axios from "axios";
import { SERVER_URL } from "@/constants/url"


async function createSubscription(email: any, setSuccess: any, setError: any) {
    try {
        const {data} = await axios.post(`${SERVER_URL}/subscriptions`, { email }, {
            headers: {
                "Content-Type": 'application/json',
            }
        });
        if (data.data.subscription._id) {
            setSuccess('SUCCESS');
        } else {
            setError('ERROR');
        }
    } catch (error: any) {
        console.warn(error);
        setError('ERROR! ' + error.message);
    }finally{
        setTimeout(() => {
            setSuccess('')
            setError("")
        }, 10000);
    }
}

export {
    createSubscription
}
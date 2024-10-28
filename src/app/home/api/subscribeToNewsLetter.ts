import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { BASE_URL } from "@/constants/url"

async function subscribeToNewsLetter(email: any) {
    try {
        fetchData(`${BASE_URL}/subscriptions`, { body: JSON.stringify({ email }), method: "post" })
    } catch (error) {
        console.warn(error);
    }
}

export {
    subscribeToNewsLetter
}
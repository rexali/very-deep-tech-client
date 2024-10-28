import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUserProfileAPI = async (userId: string) => {

    try {
        let { data: { data: { profile } } } = await axios.get(`${SERVER_URL}/profiles/` + userId, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        return profile;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserProfileAPI
}
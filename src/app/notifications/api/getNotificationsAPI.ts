import { BASE_URL, SERVER_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";

const getNotificationAPI = async (pageNumber: any = 1) => {

    try {
        let { data } = await axios.get(`${SERVER_URL}/notifications?page=${pageNumber}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken("jwtoken"),
            }
        });

        return data;

    } catch (error) {
        console.warn(error);
    }
}

export {
    getNotificationAPI
}
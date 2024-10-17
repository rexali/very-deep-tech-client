import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";

const getCartAPI = async () => {

    try {
        let { data } = await axios.post(`${BASE_URL}/api/v1/carts`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken('jwtoken'),
            },
        });

        return data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getCartAPI
}
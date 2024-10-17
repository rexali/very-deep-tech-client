import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";

const confirmRegistrationAPI = async (confirmData: { rCode: any, email: any }) => {

    try {
        let { data } = await axios.post(`${BASE_URL}/confirm`, confirmData, {
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

export{
confirmRegistrationAPI
}
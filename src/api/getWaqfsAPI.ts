import { BASE_URL } from "@/constants/url";
import axios from "axios";

const getWaqfsData = async (jwtoken: string, pageNumber: number = 1) => {

    try {
        let { data }: { data: any } = await axios.get(`${BASE_URL}/waqfs?page=${pageNumber}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtoken,
            }
        });
        return data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getWaqfsData
}
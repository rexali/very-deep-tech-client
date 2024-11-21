import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const createFavouriteAPI = async (favouriteData: any) => {

    try {
        let { data } = await axios.post(`${SERVER_URL}/favourites`, favouriteData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.data?.favourite;
    } catch (error) {
        console.warn(error);
    }
};

export {
    createFavouriteAPI
}
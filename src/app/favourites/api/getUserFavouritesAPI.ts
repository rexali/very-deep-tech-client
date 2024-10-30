import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUserFavouritesAPI = async (userId: string, page?: number) => {

    try {
        let { data: { data: { favourites } } } = await axios.get(`${SERVER_URL}/favourites/` + userId, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return favourites.map((favourite: any) => favourite.product);
    } catch (error) {
        console.warn(error);
        
    }
};

export {
    getUserFavouritesAPI
}
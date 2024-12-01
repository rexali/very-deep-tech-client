import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUserFavouritesAPI = async (userId: string, page?: number) => {

    try {
        let data = await fetch(`${SERVER_URL}/favourites?page=` + page + '&userId=' + userId).then(res => res.json());
        if (data.data === null) {
            return [];
        }
        return data.data?.favourites.map((favourite: any) => favourite.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserFavouritesAPI
}
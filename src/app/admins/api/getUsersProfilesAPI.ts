import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUsersProfilesAPI = async (page:number) => {

    try {
        let { data: { data: { profiles } } } = await axios.get(`${SERVER_URL}/profiles?page=`+page, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        return profiles;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUsersProfilesAPI
}
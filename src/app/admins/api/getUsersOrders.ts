import { SERVER_URL } from "@/constants/url";

const getUsersOrdersAPI = async (page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/orders?page=` + page).then(res=>res.json());

        return data.data?.orders;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUsersOrdersAPI
}
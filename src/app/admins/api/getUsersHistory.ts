import { SERVER_URL } from "@/constants/url";

const getUsersHistoryAPI = async (page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/transactons?page=` + page).then(res=>res.json());

        return data.data.transactons;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUsersHistoryAPI
}
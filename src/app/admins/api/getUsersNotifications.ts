import { SERVER_URL } from "@/constants/url";

const getUsersNotificationsAPI = async (page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/notifications?page=` + page).then(res => res.json());

        return data.data?.messages;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUsersNotificationsAPI
}
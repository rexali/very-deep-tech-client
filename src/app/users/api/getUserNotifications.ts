import { SERVER_URL } from "@/constants/url";

const getUserNotificationsAPI = async (userId: string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/notifications?page=` + page + '&userId=' + userId).then(res => res.json());

        return data.data.messages;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserNotificationsAPI
}
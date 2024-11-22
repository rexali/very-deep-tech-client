import { SERVER_URL } from "@/constants/url";

const getUserNotificationsAPI = async (userId: string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/notifications?page=` + page + '&userId=' + userId).then(res => res.json());
        if (data.data === null) {
            return [];
        }
        return data.data?.notifications;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserNotificationsAPI
}
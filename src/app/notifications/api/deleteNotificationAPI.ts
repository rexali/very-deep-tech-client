import { BASE_URL, SERVER_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const deleteNotificationAPI = async (data: { notificationId: any }) => {
    try {
        let jwtoken = getToken('jwtoken') as string;
        let result = await fetch(`${SERVER_URL}/notifications`, {
            method: "delete",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtoken,
            },
            body: JSON.stringify(data)
        });

        return await result.json();
    } catch (error) {
        console.log(error);
    }
};

export {
    deleteNotificationAPI
}
import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const deleteMessageAPI = async (data: { messageId: any }) => {
    try {
        let jwtoken = getToken('jwtoken') as string;
        let result = await fetch(`${BASE_URL}/messages`, {
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
    deleteMessageAPI
}
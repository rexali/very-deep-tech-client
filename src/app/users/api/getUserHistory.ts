import { SERVER_URL } from "@/constants/url";

const getUserHistoryAPI = async (userId:string,page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/transactons?page=` + page +'&userId='+userId).then(res=>res.json());

        return data.data.transactons;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserHistoryAPI
}
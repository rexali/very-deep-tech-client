import { getJWToken } from "@/utils/getJWToken";
import { saveToken } from "@/utils/saveToken";

const getJWTData = async () => {
    try {
        const jwt = await getJWToken();
        saveToken('jwtoken', jwt?.jwtoken);
        return jwt?.jwtoken;
    } catch (error) {
        console.warn(error);
    }

};

export {
    getJWTData
}

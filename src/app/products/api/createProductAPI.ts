import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const createProductAPI = async (productData: any, setPostSuccess: any, setPostError: any) => {

    try {
        let { data: { data: { status } } } = await axios.post(`${SERVER_URL}/products/`, productData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'multipart/form-data',
            },

        });
        if (status === "success") {
            setPostSuccess(status)
        } else {
            setPostError("Failed")
        }

    } catch (error) {
        console.warn(error);
    }
};

export {
    createProductAPI
}
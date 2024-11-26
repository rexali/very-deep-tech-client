import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const createProductAPI = async (productData: any, setPostSuccess: any, setPostError: any) => {

    try {
        let { data } = await axios.post(`${SERVER_URL}/products/`, productData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'multipart/form-data',
            },

        });
        if (data.data.status === "success") {
            setPostSuccess('success')
        } else {
            setPostError("Failed")
        }

    } catch (error:any) {
        console.warn(error);
        setPostError("Error! " + error.message)

    } finally {
        setTimeout(() => {
            setPostSuccess(' ')
            setPostError(" ")
        }, 10000);
    }
};

export {
    createProductAPI
}
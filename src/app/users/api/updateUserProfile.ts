import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const updateUserProfileAPI = async (profileData: any, setPostSuccess: any, setPostError: any) => {

    try {
        let { data } = await axios.patch(`${SERVER_URL}/profiles`, profileData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (data.data.profile.modifiedCount) {
            setPostSuccess('Success');
        } else {
            setPostError('Error!')
        }

    } catch (error: any) {
        console.warn(error);
        setPostError('Error! ' + error.message)

    }
};

export {
    updateUserProfileAPI
}
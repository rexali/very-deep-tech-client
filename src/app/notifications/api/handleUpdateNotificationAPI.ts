import { BASE_URL, SERVER_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";
import axios from "axios";

const handleUpdateNotificationAPI = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any,
    ) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                subject,
                body,
                notificationId
            } = event.target.elements;

            const updateData = {
                userId: getToken('userId') || userId,
                subject: subject.value,
                body: body.value,
                notificationId:notificationId.value,
            }
            let { data } = await axios.patch(`${SERVER_URL}/notifications`, updateData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken('jwtoken'),
                },
            });
            if (data.affectedRows === 1) {
                setUpdateSuccess("Success")
            } else {
                setUpdateError("Error!")
            }
        } catch (error) {
            setUpdateError("Error!")
            console.warn(error);
        };

    } else {
        savePathLink()
    }
}

export {
    handleUpdateNotificationAPI
}
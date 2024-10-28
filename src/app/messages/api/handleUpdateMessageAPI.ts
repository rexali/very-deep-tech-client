import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";
import axios from "axios";

const handleUpdateMessageAPI = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                subject,
                message,
                messageId,
                firstName,
                lastName,
                email
            } = event.target.elements;

            const updateData = {
                userId: getToken('userId') || userId,
                subject: subject.value,
                message: message.value,
                email: email.value,
                lastName: lastName.value,
                firstName: firstName.value,
                messageId: messageId.value
            }
            let { data } = await axios.patch(`${BASE_URL}/messages`, updateData, {
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
    handleUpdateMessageAPI
}
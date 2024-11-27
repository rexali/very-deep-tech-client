import { BASE_URL, SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";
import axios from "axios";

const handleUpdateMessageAPI = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any
) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                title,
                comment,
                messageId,
                firstName,
                lastName,
                sender
            } = event.target.elements;

            const updateData = {
                userId:  userId,
                title: title.value,
                comment: comment.value,
                sender: sender.value,
                lastName: lastName.value,
                firstName: firstName.value,
                messageId: messageId.value
            }
            let { data } = await axios.patch(`${SERVER_URL}/messages`, updateData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (data.data.status) {
                setUpdateSuccess(data.data.status)
            } else {
                setUpdateError(data.data.status)
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
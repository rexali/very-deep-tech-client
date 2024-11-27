'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
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
                title,
                body,
                notificationId
            } = event.target.elements;

            const updateData = {
                userId:'',
                title: title.value,
                body: body.value,
                notificationId: notificationId.value,
            }
            let { data } = await axios.patch(`${SERVER_URL}/notifications`, updateData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (data.data.success) {
                setUpdateSuccess(data.data.success)
            } else {
                setUpdateError(data.data.success)
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
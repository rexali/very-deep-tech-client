'use client'

import { createNotificationAPI } from "../api/createNotificationAPI";

const handleNotificationSubmit = async (
    event: any,
    setSuccess: any,
    setError: any,
    userId: any
) => {
    // prevent default
    event.preventDefault();

    const {
        title,
        body,
    } = event.target.elements;

    const notificationData = {
        userId: userId,
        title: title.value,
        body: body.value,
    }
    await createNotificationAPI(notificationData, setSuccess, setError)
}

export {
    handleNotificationSubmit
}
'use client'

import { changePasswordAPI } from "../api/changePasswordAPI";

const handleChangePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    rCode: string,
    successCallback: any,
    failureCallback: any
) => {
    try {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const confirm_password = data.get('confirm_password') as string;
        const password = data.get('current_password') as string;

        if (confirm_password === password) {
            const passwordData = {
                email: email,
                rCode: rCode,
                password,
                old_password: data.get('old_password') as string,
            };

            const result = await changePasswordAPI(passwordData);
            if (result.affectedRows === 1) {
                successCallback("Success: Log in to your account now")
            } else {
                failureCallback("Error!")
            }

        }
    } catch (error) {
        console.warn(error);
    }



};

export {
    handleChangePasswordSubmit
}

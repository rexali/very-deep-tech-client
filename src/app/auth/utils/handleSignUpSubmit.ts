'use client'

import { signUpAPI } from "../api/signUpAPI";

/**
 * 
 * @param event : a form event
 * @param setSignUpError : an error callback
 * @param setSignUpSuccess : a success callback
 * @param url : a given
 */
export const handleSignUpSubmit = (
    event: any,
    setSignUpError: any,
    setSignUpSuccess: any,
    setLoading: any
) => {
    // prevent default behaviour
    event.preventDefault();
    try {
        // get user data
        const { first_name, last_name, email, password, confirm_password, remember_me } = event.target.elements;
        //   check if user password and confirm password before posting user data   
        if (password.value === confirm_password.value) {
            // call handleSignUp method and collect user data
            signUpAPI(
                first_name.value,
                last_name.value,
                email.value,
                password.value,
                remember_me.value
            ).then(((result) => {
                if (result.status === "success") {
                    // send success message
                    setLoading('');
                    setSignUpSuccess(result.status +'. You can now sign in. Link below');
                } else {
                    // send failure message
                    setLoading('');
                    setSignUpSuccess(result.status);
                }
            })).catch((err) => {
                // log error message
                setLoading('');
                setSignUpError(err.message);
                console.warn(err);
            }).finally(() => {
                setTimeout(() => {
                    setSignUpError('');
                    setSignUpSuccess('');
                    setLoading('');
                }, 20000);
            })
        }

    } catch (error: any) {
        // log error
        console.warn(error);
        setSignUpError(error.message)
    }

}
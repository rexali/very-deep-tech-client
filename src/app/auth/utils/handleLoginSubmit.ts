'use client'

import { logInAPI } from "../api/logInAPI";

/**
 * Sign in a user
 * @param event : form event
 * @param setLoginError : login callback
 * @param url : URL of a given route
 */
export const handleLoginSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    setLoading: Function,
    setLoginSuccess: Function,
    setLoginError: Function,
    router:any
) => {
    // prevent defaut behaviour
    event.preventDefault();
    // get current form data
    const data = new FormData(event.currentTarget);
    // get email
    const email = data.get("email");
    // get password 
    const password = data.get("password");
    // handle login
    logInAPI(email, password)
        .then((result: any) => {
            if (result.status === "success") {
                setLoginSuccess(result.status);
                // check if window is defined
                if (typeof window !== "undefined") {
                    // check if token is defined
                    if (result.data.token) {
                        // redirect user to a given url
                        // window.location.assign('/users');
                        router.push('/users');
                    } else {
                        // window.location.assign('/');
                        router.push('/');
                    }

                } else {
                    setLoginError("Error! Let the developer knows");
                }
            } else {
                setLoginError(result.status);
            }
        }).catch((err) => {
            // collect error thru error callback
            setLoginError(err.message);
            // print error
            console.warn(err);
        }).finally(() => {
            setTimeout(() => {
                setLoginError('');
                setLoginSuccess('');
                setLoading("");
            }, 20000);
        })
}

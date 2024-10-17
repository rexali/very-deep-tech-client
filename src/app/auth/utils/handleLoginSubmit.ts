'use client'

import { handleLogin } from "./handleLogin";

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
    url: string
) => {
    event.preventDefault();
    setLoading("Loading...");
    // get current form data
    const data = new FormData(event.currentTarget);
    // get email
    const email = data.get("email"); 
    // get password
    const password = data.get("password");
    // handle login
    handleLogin(email, password)
        .then(((result: any) => {
            // check if window is defined
            setLoading(" ");
            setLoginSuccess("Success");
            if (typeof window !== "undefined") {
                // check if response is true
                    // redirect user to a given url
                    if (result.data.token) {
                        window.location.assign('/users');
                    } else {
                        window.location.assign(url);
                    }
            } else {
                setLoginError(result.message);
            }
        })).catch((err) => {
            // collect error thru error callback
            setLoginError(err.message);
            // print error
            console.warn(err);
        });
}

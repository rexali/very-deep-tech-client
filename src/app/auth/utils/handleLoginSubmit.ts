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
        .then(((res: any) => {
            // check if window is defined
            setLoading(" ");
            setLoginSuccess("Success");
            if (typeof window !== "undefined") {
                // check if response is true
                if (res.result === true) {
                    // redirect user to a given url
                    if (window.localStorage.getItem("path")) {
                        window.location.assign(window.localStorage.getItem("path") as string);
                        window.localStorage.clear();
                    } else {
                        if (res.role === 'admin') {
                            window.location.assign('/admin');
                        } else {
                            window.location.assign(url);
                        }
                    }
                }
            } else {
                setLoginError(res.error);
            }
        })).catch((err) => {
            // collect error thru error callback
            setLoginError(err.message);
            // print error
            console.warn(err);
        });
}

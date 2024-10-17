import { signIn } from '../store/actions/auth-actions';
import { BASE_URL } from '@/constants/url';
import { AuthContext } from '@/context/AuthContext';
import { getToken } from '@/utils/getToken';
import { saveToken } from '@/utils/saveToken';
import React, { useState, useEffect } from 'react';

/**
 * Verify user authentication
 * @returns user session data
 */
export function useAuth() {
    // define login state
    const [loggedIn, setLoggedIn] = useState(false);
    // define user state
    const [user, setUser] = useState({
        token: "",
        userId: null,
        email: "",
        photo: "",
        role: ""
    });
    // declare and assign loading state
    const [loading, setLoading] = useState(true);
    // declare and initialize error state
    const [error, setError] = useState(null);
    // get the stored token 
    const token = getToken('token');
    // get the stored jwt token
    const jwtoken = getToken("jwtoken");
    // get the dispatch method
    const { dispatch } = React.useContext(AuthContext);

    useEffect(() => {
        // set loading state to true
        setLoading(true);
        // fetch data
        fetch(BASE_URL + "/auth/verify", {
            mode: 'cors',
            method: "POST",
            // body is token
            body: JSON.stringify({ token }),
            // header with authorization header jwt token
            headers: {
                "Content-Type": "application/json",
                "authorization": 'Bearer ' + jwtoken,
            }
        })
            //    convert the response to json
            .then((res) => res.json())
            // destructure new response and get result
            .then(({ result, ...rest }) => {
                // check if result is true
                if (result) {
                    // set loggedIn state to true
                    setLoggedIn(true);
                    // and the user state to 'rest'                     
                    setUser((c) => rest);
                    saveToken("userId", rest.userId);
                    saveToken("email", rest.email);
                    // dispatch the sign-in action 
                    dispatch(signIn(rest))
                } else {
                    dispatch(signIn({}))
                }
            })
            // catch the error and set the error state
            .catch((err) => setError(err))
            // finally set the loading state to false
            .finally(() => setLoading(false));
    }, [dispatch, jwtoken, token]);

    return {
        user,
        loggedIn,
        loading,
        error,
        setLoggedIn
    };
}

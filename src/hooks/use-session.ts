import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { getToken } from "../utils/getToken";
import { AuthContext } from "@/context/AuthContext";
import { restoreToken } from "../store/actions/auth-actions";

const useSession = () => {

    // get dispatch from contex
    const { dispatch } = React.useContext(AuthContext);

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            // declare user token
            let userToken;
            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                userToken = getToken('token');
                //    get jwt token
                const jwtoken = getToken('jwtoken') as string;
                // After restoring token, we may need to validate it in production apps
                const { data: { result, token } } = await axios.post(`${BASE_URL}/auth/verify`, { token: userToken }, {
                    // header
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+jwtoken
                    }
                });
                // check if sign is a success
                if (result) {
                    // restore token if found
                    dispatch(restoreToken(token));
                } else {
                    // make token null 
                    dispatch(restoreToken(null));
                }
            } catch (e) {
                // Restoring token failed
                console.warn(e);
            }

        };

        bootstrapAsync();
    }, [dispatch])
}

export { useSession };

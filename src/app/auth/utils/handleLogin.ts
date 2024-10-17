import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import { saveToken } from "@/utils/saveToken";

/**
 * Sign in user with provided input
 * @param email 
 * @param password 
 * @returns boolean value
 */
export async function handleLogin(email: any, password: any) {

    try {
        // fetch data with email and password
        const resp = await fetch(BASE_URL + "/auth/login", {
            method: 'POST',
            mode: "cors",
            // header
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + getToken("jwtoken"),
            },
            // user entered data
            body: JSON.stringify({
                email,
                password,
            }),
        });
        // get the token and result
        const result = await resp.json();
        // check if login is success
        if (result.result === true) {
            // save token
            saveToken("token", result.token);

            return result;
        } else {

            return result.error;
        }

    } catch (error) {
        console.log(error);
    }

}

import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

/**
 * Register a new user
 * @param firstName : user first name 
 * @param lastName : user last name
 * @param email : user email
 * @param password : user password
 * @param remember_me : remember user next time
 * @returns a booleen value
 */
export async function handleSignUp(
    firstName: any,
    lastName: any,
    email: any,
    password: any,
    remember_me: any
) {

    try {
        // fetch a data with method and mode set
        const resp = await fetch(BASE_URL + "/auth/register", {
            method: 'POST',
            mode: "cors",
            // set content type and authorization headers
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + getToken("jwtoken"),
            },
            // convert the body or data to json string
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                remember_me
            }),
        });
        // wait for registration result
        const result = await resp.json();
        // check result value
        if (result.affectedRows === 1) {
            // return result
            return result;
        }

    } catch (error) {
        // log error if any
        console.warn(error);
    }

}

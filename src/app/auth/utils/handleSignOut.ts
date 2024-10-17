/**
 * Sign out a user
 */
export function handleSignOut() {
    try {
        // checked if the window exists
        if (typeof window !=="undefined") {
            // set the token null
            window.sessionStorage.setItem("token", "");
            // navigate to log in page
            window.location.assign("/auth/signin");
        }
    } catch (error) {
        // print result
        console.warn(error);
    }
}
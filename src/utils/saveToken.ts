import "client-only";

const saveToken = (key: string, value: string) => {
    try {
        if (typeof window !== "undefined") {
            
            window.sessionStorage.setItem(key, value)
        }
       
    } catch (error) {
        console.warn(error);

    }
}
export {
    saveToken
}
async function shareLink(waqfId?: any) {
    var shareData: any
    if (waqfId) {
        shareData = {
            title: "Almubarak Waqf Foundation",
            text: "Create or support a waqf",
            url: `https://almubarakwaqf.org/waqfs/${waqfId}`
        };
    } else {
        shareData = {
            title: "Almubarak Waqf Foundation",
            text: "Create or support a waqf",
            url: `https://almubarakwaqf.org`
        }
    }

    try {
        await navigator.share(shareData);
        console.log("Share successfully");
    } catch (error) {
        console.warn(error)
    }
}
export {
    shareLink
}
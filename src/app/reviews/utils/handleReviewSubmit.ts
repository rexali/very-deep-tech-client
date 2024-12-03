import { savePathLink } from "@/utils/savePathLink";
import { createReviewAPI } from "../api/createReviewAPI";
import { isBoughtByUserAPI } from "../api/isBoughtByUserAPI";

const handleReviewSubmit = async (event: any, setPostSuccess: any, setPostError: any) => {
    event.preventDefault();

    const {
        user_id,
        product_id,
        review,
        rating_score
    } = event.target.elements;

    const reviewData = {
        userId: user_id.value,
        productId: product_id.value,
        review: review.value,
        ratingScore: Number(rating_score.value)
    }
    if (reviewData.userId) {
        if (await isBoughtByUserAPI(reviewData.userId, reviewData.productId)) {
            await createReviewAPI(reviewData, setPostSuccess, setPostError);
            // console.log(reviewData);
        } else {
            alert('Buy first, then use it, and post review thereafter')
        }
    } else {
        savePathLink();
        window.location.assign('/auth/signin');
    }

};

export {
    handleReviewSubmit
}
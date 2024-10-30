import { createReviewAPI } from "../api/createReviewAPI";

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
    await createReviewAPI(reviewData, setPostSuccess, setPostError);
    // console.log(reviewData);
};

export {
    handleReviewSubmit
}
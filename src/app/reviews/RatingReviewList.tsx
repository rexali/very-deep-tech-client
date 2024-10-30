import RatingReviewCard from "./RatingReviewCard";

export function RatingReviewList({ reviews = [] }: { reviews: any }) {

    return reviews?.map((review: any) => <RatingReviewCard review={review.review} ratingScore={review.ratingScore} />)

}
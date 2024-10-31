import RatingReviewCard from "./RatingReviewCard";

export function RatingReviewList({ reviews = [] }: { reviews: any }) {

    return reviews?.map((review: any) => <RatingReviewCard key={review._id} review={review.review} ratingScore={review.ratingScore} />)

}
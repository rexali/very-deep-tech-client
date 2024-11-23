import RatingReviewCard from "./RatingReviewCard";

export function RatingReviewList({ ratings = [] }: { ratings: any }) {

    return ratings?.map((rating: any) => <RatingReviewCard key={rating._id} review={rating.review} ratingScore={rating.ratingScore} />)

}
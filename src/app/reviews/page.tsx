import { RatingReviewList } from "./RatingReviewList";

export default function ReviewPage(props: any) {

    return <RatingReviewList ratings={props?.ratings ?? [{ ratingScore: 1, review: "It is good" },{ ratingScore: 2, review: "It is not that good" }]} />
}
import { RatingReviewList } from "./RatingReviewList";

export default function ReviewPage(props: any) {

    return <RatingReviewList ratings={props.ratings ?? [{ _id: 1, ratingScore: 1, review: "It is good" }, { _id: 1, ratingScore: 2, review: "It is not that good" }]} />
}
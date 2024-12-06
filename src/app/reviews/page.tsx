import Box from "@mui/material/Box";
import { RatingReviewList } from "./RatingReviewList";
import Container from "@mui/material/Container";

export default function ReviewPage(props: any) {


    if (!props.ratings.length) {
        <Container component={"main"} maxWidth="md" sx={{ mt: 8, minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box textAlign={'center'}>No qoute(s) found</Box>
        </Container>
    }

    return (<Box>
        <h3>Reviews</h3>
        <RatingReviewList ratings={props.ratings ?? [{ _id: 1, ratingScore: 1, review: "It is good" }, { _id: 1, ratingScore: 2, review: "It is not that good" }]} />
    </Box>
    )
}
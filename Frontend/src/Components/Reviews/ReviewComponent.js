import React from "react";
import ShowMoreComponent from "./ShowMoreComponent";
import Rating from "./RatingComponent";
import "./review.css";

function Review({ reviews, loding }) {
  if (loding) {
    return <p>Loding...</p>;
  }
  return (
    <div>
      {reviews
        ? reviews.map((i, index) => {
            return (
              <div className="reviewItems" key={index}>
                {i.Friend === true ? <p>Name : {i.Reviewer_name}</p> : null}
                <p>Title : {i.Title}</p>
                <p>Comment : {i.Comment}</p>
                <p>Usefulness : {i.Usefulness} (Rating outof 10)</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Rating : </p>
                  <Rating value={i.Rating} />
                </div>
                <ShowMoreComponent time={i.Delivery_time} />
              </div>
            );
          })
        : null}
    </div>
  );
}
export default Review;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Model from "react-modal";
import Review from "./ReviewComponent";
import Paging from "./PaginationComponent";
import Axios from "axios";
import "./review.css";

function Reviews(props) {
  const history = useHistory();
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoding, setIsLoding] = useState(false);
  const [modal, setModal] = useState(false);
  Model.setAppElement("#root");
  const id = JSON.parse(props.match.params.Product_id);

  // code to navigate from this component to home component
  function back() {
    history.push("/");
  }

  useEffect(() => {
    async function fetchReviews() {
      setIsLoding(true);
      // call to fetch the reviews with product_id
      const res = await Axios.post("http://localhost:1000/get/product", {
        Product_id: id,
      });
      setReviewsData(res.data);
      setIsLoding(false);
    }
    fetchReviews();
  }, [id]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const reviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  //code to change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  //code to sort-by-rating
  async function sortByRating() {
    const sortedReviews = await reviewsData.sort((a, b) =>
      a.Rating < b.Rating ? 1 : -1
    );
    setReviewsData(sortedReviews);
    setModal(false);
  }

  //code to sort-by-usefulness
  async function sortByUsefulness() {
    const sortedReviews = await reviewsData.sort((a, b) =>
      a.Usefulness < b.Usefulness ? 1 : -1
    );
    setReviewsData(sortedReviews);
    setModal(false);
  }

  return (
    <div className="reviewContainer">
      <div className="reviewerHeader">
        <h1>
          {" "}
          <span style={{ fontSize: "16px" }}>Reviews for</span> Product_id :{" "}
          {JSON.parse(props.match.params.Product_id)}, Viewer_id :{" "}
          {JSON.parse(props.match.params.Viewer_id)}{" "}
        </h1>
        <button onClick={() => setModal(true)}>Filters</button>
      </div>
      <div>
        <Model
          className="modal"
          isOpen={modal}
          onRequestClose={() => setModal(false)}
        >
          <div>
            <h2>Sort by</h2>
            <button onClick={() => sortByRating()}>Rating (high to low)</button>
            <button onClick={() => sortByUsefulness()}>
              Usefullness (high to low)
            </button>
            <br />
            <button onClick={() => setModal(false)}>close</button>
          </div>
        </Model>
      </div>

      <div>
        <Review reviews={reviews} loding={isLoding} />
      </div>

      <div className="footer">
        <button onClick={() => back()}>Back</button>
        <Paging
          totalReviews={reviewsData.length}
          reviewsPerPage={reviewsPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Reviews;

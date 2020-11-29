import React from "react";
import "./review.css";

function Paging({ totalReviews, reviewsPerPage, paginate }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages
        ? pages.map((i) => {
            return (
              <div key={i} className="pagebuttons">
                <button onClick={() => paginate(i)}>{i}</button>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Paging;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Products.css";

function Products() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    // api call to fetch product_ids
    Axios.get("http://localhost:1000/fetch/products_ids")
      .then((rel) => {
        setIds(rel.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Click on product_id to see their reviews</h1>
      </div>

      <div className="productsContainer">
        <div className="products">
          {ids.map((i, index) => {
            return (
              <div key={index} className="item">
                <Link to={`/reviews/${i.Product_id}/${i.Viewer_id}`}>
                  Product_id:{i.Product_id} Viewer_id : {i.Viewer_id}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;

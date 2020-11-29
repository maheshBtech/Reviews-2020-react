import React from "react";
import Products from "./Components/Products/ProductsComponent";
import Reviews from "./Components/Reviews/ReviewsComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/reviews/:Product_id/:Viewer_id" component={Reviews} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

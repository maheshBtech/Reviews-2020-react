const Router = require("express").Router();
const Data = require("../Data/Data");

Router.post("/product", async (req, res) => {
  try {
    const { Product_id } = req.body;
    const products = await Data;
    if (!products) return res.status(401).send({ msg: "something went wrong" });
    const product = products.find((i) => i.Product_id === Product_id);
    const reviews = product.Reviews;
    res.send(reviews);
  } catch (err) {
    res.status(401).send({ err: "something went wrong" });
  }
});

module.exports = Router;

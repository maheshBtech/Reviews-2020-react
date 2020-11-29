const Router = require("express").Router();
const Data = require("../Data/Data");
Router.get("/products_ids", async (req, res) => {
  try {
    const rel = await Data;
    if (!rel) return res.status(401).send({ msg: "something went wrong" });
    const ids = rel.map((i) => {
      return { Product_id: i.Product_id, Viewer_id: i.Viewer_id };
    });
    res.send(ids);
  } catch (err) {
    res.status(401).send({ err: "something went wrong..." });
  }
});

module.exports = Router;

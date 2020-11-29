const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/fetch", require("./Routes/products_ids_router"));
app.use("/get", require("./Routes/product_router"));
app.listen(1000, () => console.log("The server is running at port 1000"));

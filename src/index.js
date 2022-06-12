const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");


const topstoriesController = require("./controllers/topstories.controller");
const newstoriesController = require("./controllers/newstories.controller");
const beststoriesController = require("./controllers/beststories.conroller");



const port = process.env.PORT || 8080;
const app = express();


app.use(cors());
app.use(express.json());

app.use("/topstories", topstoriesController);
app.use("/newstories", newstoriesController);
app.use("/beststories", beststoriesController);



app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
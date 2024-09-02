let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());



app.get("/cricketers", (req, res) => {
  let cricketersArr = ["Dhoni", "Virat", "Raina"];
  res.json(cricketersArr);
});



app.listen(1234, () => {
  console.log("Listening to port 1234");
});

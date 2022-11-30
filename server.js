const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

dotenv.config();
require("./db");

app.use(express.json());
app.use(cors());

// Routes import and user
const itemRoute = require("./routes/item.routes");
const userRoute = require("./routes/user.routes");
const billRoute = require("./routes/bill.routes");

app.use("/api/v1/items", itemRoute);
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/bill", billRoute);


app.get("/", (_req, res) => {
  res.send("This is home page.");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

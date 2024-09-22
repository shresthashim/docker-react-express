const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const items = require("./data.json");


app.use(cors());
app.use(express.json());


app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

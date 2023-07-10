import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

var itemsList = [];

app.post("/api/items", (req, res) => {
  const value = req.body.value;
  itemsList.push({
    id: 0,
    content: value,
  });
  res.json({ list: itemsList });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

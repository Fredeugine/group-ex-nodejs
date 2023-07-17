import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

type Item = {
  id: number;
  content: string;
};

let itemsArr: Item[] = [];
let currentId = 9999;

app.get("/api/items", (req, res) => {
  res.json({ list: itemsArr });
});

app.post("/api/items", (req: Request, res: Response) => {
  var value = req.body.value;
  itemsArr.push({
    id: currentId,
    content: value,
  });
  currentId = currentId + 1;
  res.json({ status: "ok", list: itemsArr });
});

// DELETE http://localhost:3001/api/items/2

app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  itemsArr = itemsArr.filter((item) => item.id !== id);
  res.json({ status: "ok", list: itemsArr });
});

app.put("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  var value = req.body.value;
  // this updated the item in the itemsarray that has the same id as the id we give in the put request url.
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].id === id) {
      itemsArr[i].content = value;
    }
  }
  // var index = itemsArr.findIndex((el) => el.id === id);
  // itemsArr[index].content = value;

  res.json({ status: "ok", list: itemsArr });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

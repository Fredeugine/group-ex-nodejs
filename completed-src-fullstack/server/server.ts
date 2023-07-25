import cors from "cors";
import express, { Request, Response } from "express";
import {
  createItem,
  deleteByID,
  getAll,
  sortAll,
  updateByID,
} from "./endpoints.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/api/items", getAll);
app.post("/api/items/sort", sortAll);
app.post("/api/items", createItem);
app.delete("/api/items/:id", deleteByID);
app.put("/api/items/:id", updateByID);

app.listen(port, () => {
  console.log("Server started on port", port);
});

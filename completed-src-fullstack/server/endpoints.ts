import { Request, Response } from "express";

type Item = {
  id: number;
  content: string;
  timestamp: number;
};

let itemsArr: Item[] = [];
let currentId = 100;

export function getAll(req, res) {
  res.json({ list: itemsArr });
}

export function sortAll(req, res) {
  itemsArr.sort((a, b) => a.timestamp - b.timestamp);
  res.json({ list: itemsArr });
}

export function createItem(req: Request, res: Response) {
  var value = req.body.value;
  itemsArr.push({
    id: currentId,
    content: value,
    timestamp: Date.now(),
  });

  currentId = currentId + 1;

  res.json({ status: "ok", list: itemsArr });
}

export function deleteByID(req, res) {
  // DELETE http://localhost:3001/api/items/2
  const id = Number(req.params.id);
  itemsArr = itemsArr.filter((item) => item.id !== id);
  res.json({ status: "ok", list: itemsArr });
}

export function updateByID(req: Request, res: Response) {
  const id = Number(req.params.id);
  var value = req.body.value;

  // update the itemsArr element with the new text.

  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].id === id) {
      itemsArr[i].content = value;
    }
  }

  itemsArr.forEach((element) => {
    if (element.id === id) {
      element.content = value;
    }
  });

  res.json({ status: "ok", list: itemsArr });
}

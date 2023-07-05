import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

var var1 = "hello metehan";

app.get("/api/variable", (request, response) => {
  response.json({
    value: var1,
  });
});

app.post("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json({
    status: "success",
  });
});

app.delete("/api/variable", (request, response) => {
  var1 = "";
  response.json({
    status: "success",
  });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

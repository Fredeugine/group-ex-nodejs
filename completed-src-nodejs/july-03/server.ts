import express from "express";

const app = express();
const port = 3000;
//111



// configures the express.js server to accept json
app.use(express.json());

var var1 = "hello 1";

app.get("/api/variable", (request, response) => {
  let obj = {
    value: var1,
  };
  response.json(obj);
});

app.post("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json({ status: "success" });
});

app.put("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json({ status: "success" });
});

app.delete("/api/variable", (request, response) => {
  var1 = "";
  response.json({ status: "success" });
});

app.listen(port, () => {
  console.log("Server started, on port: ", port);
});

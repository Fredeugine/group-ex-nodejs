import express from "express";

const app = express();
const port = 3000;

// configures the express.js server to accept json
app.use(express.json());
var var1 = "";

var planets: {
  id: number;
  name: string;
}[] = [];
var currentId = 0;

app.get("/api/planets", (request, response) => {
  response.json({
    planets: planets,
    currentId: currentId,
  });
});

app.post("/api/planets", (request, response) => {
  const { value } = request.body;
  planets.push({
    id: currentId,
    name: value,
  });
  currentId = currentId + 1;
  response.json({ status: "success" });
});

app.put("/api/planets/:id", (request, response) => {
  const { value } = request.body;
  const { id } = request.params;
  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    if (Number(id) === planet.id) {
      planet.name = value;
    }
  }
  response.json({ status: "updated" });
});

app.delete("/api/planets/:id", (request, response) => {
  const { id } = request.params;

  planets = planets.filter((planet) => planet.id !== Number(id));
  response.json({ status: "deleted" });
});

app.listen(port, () => {
  console.log("Server started, on port: ", port);
});

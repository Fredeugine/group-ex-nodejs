import { createServer } from "node:http";

// After making request to 'http://localhost:3000' with curl using the --verbose flag in terminal, the value of the Content-Length was 19

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});


# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your nodejs app.
Expressjs server will run on **localhost:3000**.

## Start editing the **src/server.ts** file.

Create an array of planet objects in server.ts, that look like this:
[
  {
    id: 0,
    name: "Mars"
  },
  {
    id: 1,
    name: "Jupiter"
  }
]

Define a GET route for /api/planets that sends a JSON response with a list of planets.
Define additional routes as needed, such as POST, PUT, and DELETE routes for creating, updating, and deleting planets.

Start the server by calling app.listen() and specify the port number to listen on, which will be 3000.


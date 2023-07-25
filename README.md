# Getting started:
Fork and clone this repository, and run

    npm install

Inside the repository.

Start editing the **src/app.js** file for the react part, and **src/server/server.ts** for the express.js server part.

Run:

    npm run dev

This will start the react app and the server app at the same time, with hot reload enabled for both of them.

React app will run on **localhost:3000** and the express server needs to be created, to run on **localhost:3001**.

You should use:

    import cors from "cors";
    app.use(cors());

to enable CORS for the express.js server, so that it accepts http requests from the react app.

For the backend:

Create a variable that stores a list of items, that look like:
[
  {
    id: 0,
    content: "Hello"
  },
  {
    id: 1,
    content: "World"
  }
]

Implement CRUD operations for this list, using "/api/items" as the base API url.

For the Backend:

Update the expressjs endpoints, write functions for each action (getAll, create, updateByID, deleteByID), and use them in your express server. Write the proper types for these functions (req and res objects as parameters).

Move the functions in a separate file, and import them in server.ts.

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

For the frontend:

Update the ItemComponent to display the item in an input tag. Receive the item text as a prop, set it in your state.
When the user changes the text in the input tag of your ItemComponent, update the state, and make a PUT request to the server to update that item.


For the Backend:

Implement an app.put() endpoint, which will update an item using the text and id received from the frontend.
The URL for the app.put() looks like this:
"/api/items/:id"

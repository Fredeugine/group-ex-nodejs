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

Add an input tag and a button tag called "Save" at the top of the page, and when we click on the button Save, we send that item to the backend to save it there, and also display it in a list in the frontend.
Make it so when the page loads, we load all the items from the backend, and display them in a list.

Create a ItemComponent that will show the data we get for an item.
In the ItemComponent, display the text we get in another input tag. Whenever we change the text in that input tag, we make a PUT request to the backend, to update the text on the backend aswell.

Add a Delete button to the ItemComponent, that deletes that item from the list.

For the Backend:

Implement an app.delete() endpoint, which will remove an item from the itemsArr, by using an id from the URL.
The URL for the app.delete() looks like this:

"/api/items/:id"

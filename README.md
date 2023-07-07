# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your nodejs app.
Expressjs server will run on **localhost:3000**.

## Start editing the **src/server2.ts** file.

Create an array of planet objects in server2.ts, that look like this:
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

`In the provided code, there is a variable var1 declared but not used. Modify the code to assign the value "Hello, World!" to var1.

Create a new endpoint that accepts a GET request to "/api/planets/:id" and returns the details of the planet with the corresponding ID. The response should include the planet's name and ID.

Implement error handling for the GET endpoint mentioned in the previous step. If the requested planet ID does not exist, return a JSON response with an appropriate error message and a 404 status code.

Add validation to the POST endpoint ("/api/planets") to ensure that the request body contains a valid value for the planet's name. If the name is missing or empty, return a JSON response with an appropriate error message and a 400 status code.

Implement error handling for the PUT endpoint ("/api/planets/:id"). If the requested planet ID does not exist, return a JSON response with an appropriate error message and a 404 status code.

Create a new DELETE endpoint ("/api/planets") that deletes all planets from the list. The response should include a status message confirming the deletion.

Test the API endpoints using a tool like Postman or cURL to ensure they work correctly.`
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
let planets = [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];

app.get('/planets', (req, res) => {
    res.json(planets);
    console.log(req)
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


let planets= [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];
let currId = 3;

// Get all planets
const getAll = (req , res) => {
    res.status(200).json(planets);
};

// Get a planet by ID
const getOneById = (req, res) => {
    const {id} = req.params
    // planets already start with id as 1, an id of 0 isn't valid
    if (planets[id-1]){
        res.json(planets[id-1])
    }
    else{
        res.json({msg: `Planet with id = ${id} isnt available`})
    }
};

// Create a new planet
const create = (req, res) => {
    const { val } = req.body;
    const newPlanet = {
        id: currId,
        name: val,
    };
    planets = [...planets, newPlanet];
    currId++;
    res.status(201).json({ msg: 'Planet created successfully' },planets);
};

// Update a planet by ID
const updateById = (req, res) => {
    const {id} = req.params
    const  {val} = req.body
    if (planets[id-1] && planets[id-1].id === Number(id)){
        planets[id-1].name = val
        res.status(200).json({msg: 'Updated successfuly'} )
    }
    else{
        res.json({msg: `Planet with id = ${id} isnt available`})
    }
};

// Delete a planet by ID
const deleteById = (req, res) => {
    const {id} = req.params;
    const planetIndex = planets.findIndex((p) => p.id === Number(id));

    if (planets[Number(id) - 1]) {
        planets.splice(planetIndex, 1);
        for (let i = 0; i < planets.length; i++) {
            planets[i].id = i + 1
        }
        currId = planets.length + 1
        res.json({ msg: 'Planet deleted successfully' });
    } else {
        res.status(404).json({ msg: `Planet with ID ${id} not found` });
    }
};

// Routes
app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.put('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteById);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

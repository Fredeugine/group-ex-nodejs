import express, {response} from "express";
import e from "express";
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
let currId = 3;
// accept JSON from the Client
// log the Client's requests
// GET /api/planets: return all planets (JSON) with 200
app.get('/api/planets', (req, res) => {
    res.status(200).json(planets);
    console.log(req)
});


// POST /api/planets: create a planet, return only 201 code and a success JSON with key msg
// Make sure every planet is created with id and name.
app.post('/api/planets/',(req, res)=>{
    const {val} = req.body
    planets.push({
        id: currId,
        name: val
    })
    currId++
    res.json(planets)
})
// GET /api/planets/:id: return a planet (JSON) by id with 200

app.get('/api/planets/:id', (req, res) => {
    const {id} = req.params
    // planets already staart with id as 1, an id of 0 isnt valid
    if (planets[id-1]){
        res.json(planets[id-1])
    }
    else{
        res.json({msg: `Planet with id = ${id} isnt available`})
    }
});
// PUT /api/planets/:id: update a planet by id, return only 200 code and a success JSON with key msg
app.put('/api/planets/:id',(req, res)=>{
    const {id} = req.params
    const  {val} = req.body
    if (planets[id-1] && planets[id-1].id === Number(id)){
        planets[id-1].name = val
        res.status(200).json({msg: 'Updated successfuly'} )
    }
    else{
        res.json({msg: `Planet with id = ${id} isnt available`})
    }
})
// DELETE /api/planets/:id: delete a planet by id, return only 200 code and a success JSON with key msg
app.delete('/api/planets/:id',(req, res)=>{
    const {id} = req.params
    if (planets[Number(id) - 1]){
        planets.splice(Number(id) - 1,1)
        for (let i = 0; i < planets.length; i++) {
            planets[i].id = i + 1
        }
        currId = planets.length + 1
        res.json(planets)
    }
    else{
        res.json({msg: `Planet is empty, add more planets`})
    }


})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

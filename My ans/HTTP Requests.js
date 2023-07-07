import express, {json, response} from "express";
const app = express()
const port = 3000


app.use(json())

var planet = []
var currId = 0;
app.get('/api/planets/:id', (request, response) => {
    const { id } = request.params;
    if (planet[id]) {
        response.json(planet[id]);
    } else {
        response.json({ status: 'Planet is empty' });
    }
});

app.post('/api/planets/',(req, res)=>{
    const {val} = req.body
    planet.push({
        id: currId,
        name: val
    })
    currId++
    response.json(planet)
})
app.delete("/api/planets/:id", (request, response) => {
    const { id } = request.params;
    planet.splice(Number(id),1)

    for (let i = 0; i < planet.length; i++) {
        planet[i].id = i
    }
    currId = planet.length + 1
    response.json({ status: `Planet ${planet[Number(id)]} has been deleted` });
});
app.put("/api/planets/:id", (request, response) => {
    const {val}  = request.body;
    const { id } = request.params;
        if (Number(id) === planet.id) {
            planet[id] = val;
            response.json({ status: "updated" });
        }

});
app.listen(port,function (){
    console.log('server started on port 3000')
})

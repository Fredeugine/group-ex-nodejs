import express, {json, response} from "express";
const app = express()
const port = 3000

app.use(json())

var planet: {
    id: number,
    name: string
}[] = []
var currId: number = 0;
app.get('/api/planets/',(request,response)=>{
    response.json(planet)
})
app.post('/api/planets/',(req, res)=>{
    planet.push({
        id: currId,
        name: 'Mars'
    })
    currId++
    req.body = planet
    response.json(planet)
})
app.listen(port,function (){
    console.log('server started on port 3000')
})

const express = require("express")

const calculationRouter = require("./routers/calculation")

const PORT = process.env.PORT || 3000;

require("./db/mongoose");

const app = express()

app.use(express.json())
app.use(calculationRouter)

//Homepage API
app.get("/",function(request,response){
    response.send("Hello World!")
})

app.listen(PORT, function () {
    console.log(`Started application on port ${PORT}`)
});

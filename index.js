const express = require("express")

const PORT = process.env.PORT || 3000;

const app = express()

//Homepage API
app.get("/",function(request,response){
    response.send("Hello World!")
})

app.listen(PORT, function () {
    console.log(`Started application on port ${PORT}`)
});

const express = require('express')
const router = express.Router();

const Calculation = require("../model/calculation")

router.post("/calculation", async (req, res) => {
    console.log(req.body)
    x = req.body.x
    y = req.body.y
    result = 0;
    switch (req.body.operation){
        case "Add":
            result = x + y
            break;
        case "Subtract":
            result = x - y
            break;
        case "Multiply":
            result = x * y
            break;
        case "Divide":
            result = x / y
            break;
    }

    const calculation = new Calculation({...req.body, result: result})
    try {
        await calculation.save()
        res.status(201).send(calculation)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;
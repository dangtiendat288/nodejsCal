const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

const Calculation = require("../model/calculation")

router.post("/calculation", async (req, res) => {
    console.log(req.body)
    const {x, y} = req.body
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

router.get('/calculation', async (req, res) => {
    try {
        const calculations = await Calculation.find({})
        res.send(calculations)
    } catch (e) {
        res.status(500).send();
    }
})

router.get('/calculationByDay', async (req, res) => {
    const {yearS, monthS, dayS} = req.body
    const {yearE, monthE, dayE} = req.body

    let start = new Date(yearS, monthS - 1, dayS);
    let end = new Date(yearE, monthE - 1, dayE);

    console.log(start, end)

    try {
        const calculations = await Calculation.find({createdAt: {$gte: start, $lt: end}})
        res.send(calculations)
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router;
// Model 
// x y result operation time 

const mongoose = require('mongoose')
const calculationSchema = new mongoose.Schema(
    {
        x: {
            type: Number,
            trim: true,
            required: true,
        },
        y: {
            type: Number,
            trim: true,
            required: true,
        },
        result: {
            type: Number,
            trim: true,
            required: true,
        },
        operation: {
            type: String,
            trim: true,
            required: true,
        }
    },
        {timestamps: true}
    )

    const Calculation = mongoose.model("Calculation", calculationSchema);

    module.exports = Calculation;
const axios = require('axios');
const express = require('express');
const { ExpressError } = require("./expressError");
const { calculateMean, calculateMedian, calculateModal, checkInputs } = require('./helpers');

const app = express();
app.use(express.json());


app.get('/mean', (req, res, next) => {
    try {
        let arrOfStrings = checkInputs(req);
        let response = {
            operation: "mean",
            value: calculateMean(arrOfStrings)
        }
        return res.json(response);
    }
    catch (e) {
        next(e)
    }
})

app.get('/median', (req, res, next) => {
    try {
        let arrOfStrings = checkInputs(req);
        let response = {
            operation: "median",
            value: calculateMedian(arrOfStrings)
        }
        return res.json(response);
    }
    catch (e) {
        next(e)
    }
})

app.get('/modal', (req, res, next) => {
    try {
        let arrOfStrings = checkInputs(req)
        let response = {
            operation: "modal",
            value: calculateModal(arrOfStrings)
        }

        return res.json(response);
    }
    catch (e) {
        next(e)
    }

})



app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message;
    console.log(err);
    return res.status(status).json({
        error: {
            message, status
        }
    })
    
})
app.listen(3000, function () {
    console.log("App on port 3000")
})
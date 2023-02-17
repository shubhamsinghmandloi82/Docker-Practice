const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./src/config/redis')


app.use(express.json())
app.get('/test', (req, res) => {
    res.json("This App Is Runing Successfully")
})

app.post('/textEditor', (req, res) => {
    try {
        let { text, opration } = req.body;
        switch (true) {
            case opration == 1: let upperTextCase = text.toUpperCase();
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Upper Text Case Is Running Successfully",
                    result: upperTextCase
                })
                break;
            case opration == 2: let lowerTextCase = text.toLowerCase();
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Lower Text Case Is Running Successfully",
                    result: lowerTextCase
                })
                break;
            case opration == 3: let removeTextCase = "";
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Remove Text Case Is Running Successfully",
                    result: removeTextCase
                })
                break;
            default:
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Default Switch Case Is Running",
                })
        }
    } catch (error) {
        res.json({
            status: "fail",
            statusCode: 400,
            message: error.message,
        })
    }

})

app.post('/calculator', (req, res) => {
    try {
        let { val1,val2, opration } = req.body;
        switch (true) {
            case opration == 1: let add = (val1 + val2)
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Add Case Run Successfully",
                    result: add
                })
                break;
            case opration == 2:  let sub = (val1 - val2)
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Sub Case Run Successfully",
                    result: sub
                })
                break;
            case opration == 3: let mul = (val1 * val2)
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Multi Case Run Successfully",
                    result: mul
                })
                break;
            case opration == 4: let div = (val1 / val2)
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Div Case Run Successfully",
                    result: div
                })
                break;    
            default:
                res.json({
                    status: "success",
                    statusCode: 200,
                    message: "Default Switch Case Is Running",
                })
        }
    } catch (error) {
        res.json({
            status: "fail",
            statusCode: 400,
            message: error.message,
        })
    }

})

// here is local server code written
app.listen(port, () => {
    console.log(`
    |******************** This App Is Runing Successfully **********************|
    |                                                                           |
    |                                                                           |
    |                       On The Port Of => ${port}                              |
    |                                                                           |
    |                                                                           |
    |***************************************************************************| 
    ` )
})

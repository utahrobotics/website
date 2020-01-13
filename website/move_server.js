const express = require('express')
const softmax = require('softmax-fn');

const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var left = 0;
var right = 0;
var forward = 0;
var backward = 0;

app.post('/move', (req, res) => {
    console.log(req.body)
    switch (req.body.move) {
        case "left":
            left++;
            res.status(200).json("left adjusted")
            break;
        case "right":
            right++
            res.status(200).json("right adjusted")
            break;
        case "forward":
            forward++
            res.status(200).json("forward adjusted")
            break;
        case "backward":
            backward++
            res.status(200).json("backward adjusted")
            break;
        default:
            res.status(500).json("uh oh")
            break;
    }
})

app.post('/reset', (req, res) => {
    left = 0;
    right = 0;
    forward = 0;
    backward = 0;
    res.send("averages reset")
})

app.get('/averages_and_reset', (res, response) => {
    var soft = softmax([left, right, forward, backward])
    console.log(left, right, forward, backward)
    console.log(soft)
    left = 0;
    right = 0;
    forward = 0;
    backward = 0;
    response.send(soft)
})

app.listen(5000, () => { console.log("Listening on port 5000") })
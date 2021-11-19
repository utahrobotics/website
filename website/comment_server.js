const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
var cors = require('cors')

const express = require('express')

var ips = [];

const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const adapter = new FileAsync('db.json')
low(adapter).then(db => {
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));

    db.defaults({ comments: [] }).write()

    app.post('/post', (req, res) => {
        console.log("post body:", req.body)
        db.get('comments').push({
            vidid: req.body.id + req.body.level,
            name: req.body.name,
            school: req.body.school,
            body: req.body.body,
            timestamp: req.body.timestamp
        })
            .write()
            .then(post => res.send(post))
    })

    app.post('/posts', (req, res) => {
        console.log("posts body:", req.body)
        console.log("responding with", db.get('comments').filter({ vidid: req.body.id + req.body.level }).value())
        res.send(db.get('comments').filter({ vidid: req.body.id + req.body.level }).value())
    })


    app.post('/ip', (req, res) => {
        console.log("post body:", req.body)

        var idx = ips.findIndex((ip) => ip.name == req.body.name && ip.ssid == req.body.ssid);
        if (idx == -1) {
            ips.push({
                name: req.body.name,
                ip: req.body.ip,
                ssid: req.body.ssid,
                time: new Date(),
            })
        }
        else{
            ips[idx] = {
                name: req.body.name,
                ip: req.body.ip,
                ssid: req.body.ssid,
                time: new Date(),
            }
        }
        res.send(ips)
    })

    app.post('/ips', (req, res) => {
        console.log("posts body:", req.body)
        console.log("responding with", ips)
        res.send(ips)
    })

    app.listen(5001, () => { console.log("Listening on port 5001") })
})

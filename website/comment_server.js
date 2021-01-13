const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
var cors = require('cors')

const express = require('express')



const app = express()
app.use(cors())

const adapter = new FileAsync('db.json')
low(adapter).then(db => {
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    
    db.defaults({ comments: [] }).write()
    
    app.post('/post', (req, res) => {
        console.log(req.body)
        db.get('comments').push({
            vidid: req.body.id+req.body.level,
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
        res.send(db.get('comments').filter({vidid: req.body.id+req.body.level}))
    })
    
    app.listen(5001, () => { console.log("Listening on port 5001") })
})
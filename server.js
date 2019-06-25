const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));


app.get('/athletes', function(req, res){
    db.athlete.findAll().then(function(athletes){
        res.json(athletes);
    });
});

app.get('/athletes/:id', function(req, res){
    db.athlete.findone({
        where: {id: parseInt(req.params.id)}
    }).then(function(athlete){
        res.json(athlete);
    });
});

app.post('/athletes', function(req, res){
    db.athlete.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: parseInt(req.body.age),
        number: parseInt(req.body.number),
        weight: parseInt(req.body.weight),
        college: req.body.college

    }).then(function(athletes){
        res.json(athletes);
    });
});

app.put('/athletes/:id', function(req, res){
    db.athlete.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: parseInt(req.body.age),
        number: parseInt(req.body.number),
        weight: parseInt(req.body.weight),
        college: req.body.college
    }, {
        where: {id: parseInt(req.params.id)}
        
    }).then(function(count){
        res.json(count);
    });
});

app.delete('/athletes/:id', function(req, res){
    db.athlete.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});


// make your model
// run the migrations
// create one record route
// read one record route
// read all record route
// update one record route
// delete one record route





app.listen(3000, function(){
    console.log("You're listening to the sultry sounds of port 3000, this is your host DOM Manipulator. 🥳");
});
// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

const baseQuery = "/api/";



// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.json({
        success:true
    })

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});


// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);
});

// get pet by owner with query string


app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
      res.send(pets.owner);
       

    
    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
   const {id}=req.params;

   const baseQuery = pets.find(i=>i.id===Number(id));
   if(pets){
    res.send(pets)
    }else{
        res.send("Student Not Found")
    }         


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);
    if(pet){
        res.send(pet);

    }else{
        res.send("Pet Not Found")
    }

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
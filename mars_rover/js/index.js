const express = require("express");
const { param } = require("express/lib/request");
const Rover = require("./src/rover");

const app = express();
const port = process.env.PORT || 8080;


app.get("/:a", (req, res) => {
    var list= new Array()
    list= ['f','r','r','l','f'];
    const rover = new Rover(0,0,'N',list);
    //console.log(list.length)
    //console.log(Boolean (rover.obstacle()))
    
    rover.send()
    
    res.json(rover);
});

// routes will go here

app.listen(port);
console.log("Server started at http://localhost:" + port);

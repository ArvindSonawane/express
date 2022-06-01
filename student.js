//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const port = process.env.PORT || 8080;
// Endpoint to Get a list of users
app.get('/getStudents', function(req, res){
    fs.readFile(__dirname + "/" + "students.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

//Step 1: Create a new user variable
var student = {
    "student2": {
        "id":1,
        "studentFirstName":"Xyz",
        "collegeName": "IIT",
        "location": "Mumbai"
      },
} 



//The addUser endpoint
app.post('/addStudent', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/" + "students.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["student2"] = student["student2"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


// Create a server to listen at port 8080
var server = app.listen(3005, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
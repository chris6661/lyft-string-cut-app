const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

//get request for the home page
app.get('/', (req, res) => {
    res.send("index.html"); 
}); //end of get request for the home page

// need method to return json data with key return_string, every third letter

// input type would be a string entered from html form
// string has to be at least 3 letters long, make sure to add conditionals

function cut_str(str) {
    let return_string = "";
    // start at third character, add 3 to find next char to add to return_string
    for (let i = 2; i < str.length; i += 3) {
        return_string += str[i]; 
    }
    return return_string;
}
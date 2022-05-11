const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

//get request for the home page
app.get('/', (req, res) => {
    res.send("index.html"); 
}); 
//end of get request for the home page

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

// post request for home page, accepts argument "string_to_cut" from html form
app.post("/test", (req, res) => {
    const {string_to_cut } = req.body; 

    if (string_to_cut.length >= 3) {
        res.send(`
        <html>
            <head>
                <link rel = "stylesheet" href = "style.css">
            </head>
            <body class = "result">
                <h2>Result: </h2>
                <h2>{"return_string": ${JSON.stringify(cut_str(string_to_cut))} }</h2>
                <a href = "/"><button>Go Back</button></a>
                </body>
                </html>
                `
        ); 
    } else if (!string_to_cut) {
        res.status(400).send("There is no 'string_to_cut' key in the request body.");
    } else {
        res.status(400).send("Please enter a string with at least 3 letters.");
    }
});
 //end of post request for home page

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 })
# String Cutter

## Description 
This is a simple web application for tkaing a string entered by the user and returning every third letter as the result, as stated here:   

Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
Return a JSON object with the key “return_string” and a string containing every third letter from the original string
(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}

The application also has conditionals built in to let the user know if they enter an empty string as well as if the entered string is less than 3 letters long.


## Deployed at Heroku here:
https://lyft-sw-app.herokuapp.com/

### Built With 

 * HTML
 * CSS
 * Express.js
 * Node.js


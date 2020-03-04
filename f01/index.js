const express = require("express");

var app = express();




app.get("/time", (request, response) => {
    response.send("<html>" +"Time: " + Date() +"</html>");
});

app.listen(80);


console.log("Listo");

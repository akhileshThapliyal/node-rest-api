const express = require("express");

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/retreiveClientHeaders", (request, response) => {
    console.log(JSON.stringify(request.headers));
    
    response.send(request.headers);
 });

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
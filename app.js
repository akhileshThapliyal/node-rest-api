const express = require("express");
const cors = require('cors');
//const helmet = require("helmet");

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const whitelist = ['http://localhost:4200']; // assuming front-end application is running on localhost port 3000

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Expose-Headers", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(cors(corsOptions));
//app.use(helmet());

app.get("/getRequestHeaders", (request, response) => {
    //console.log(JSON.stringify(request.headers));
    response.send(request.headers);
});

app.get("/getResponseHeaders", (request, response) => {
    //console.log(JSON.stringify(response.headers));
    response.send(response.headers);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
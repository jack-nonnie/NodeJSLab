const express = require("express");
const bodyParser = require("body-parser");
const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  routes(app);

  /*response.send({
    message: `Node.js and Express REST API`
  });*/
});
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

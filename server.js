const { resolve } = require("path");
const express = require("express");

const app = express();

app.use("*", express.static(resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3000),
  (error) => {
    if (erro) {
      return console.log(error);
    }
  };

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});

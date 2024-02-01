const express = require('express');
const app = express();

const mongooseConnect = require("./configs/mongoDB.connect");


const port = 8000;
app.listen(port, (err) => {
  
  if (err) {
    throw err;
  }
  console.log(`ProductPriceSurvey Server is running on port ${port}`);
  mongooseConnect();

});
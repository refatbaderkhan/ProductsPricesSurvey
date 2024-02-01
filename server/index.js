const express = require('express');
const app = express();


app.use(express.json());

const mongooseConnect = require("./configs/mongoDB.connect");

const productRoutes = require('./routes/product.routes');
app.use('/', productRoutes);

const port = 8000;
app.listen(port, (err) => {
  
  if (err) {
    throw err;
  }
  console.log(`ProductPriceSurvey Server is running on port ${port}`);
  mongooseConnect();

});
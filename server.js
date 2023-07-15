const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb=require("./config/dbConnection");
const app = express();
const port = process.env.PORT || 5000;

connectDb();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };

app.use(express.json()); // Middleware for Body parsing

app.use(logger);

app.use("/api/categories", require("./routes/categoryRoutes")); //middleware

app.use("/api/products", require("./routes/productRoutes")); //middleware

app.use("/api/orders", require("./routes/orderRoutes")); //middleware

app.use("/api/users", require("./routes/userRoutes")); 

app.use(errorHandler); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

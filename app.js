const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

const ownerRouter = require('./routes/ownerRouter.js');
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');

const db = require('./config/mongoose-connection.js'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {   
    console.log("Server is running on port 3000");
});
const express = require('express');
const productRouter = require('./product');
const bodyParser = require('body-parser');
const userRouter = require('./user');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(productRouter);
app.use(userRouter);

app.listen(4000, '0.0.0.0', () => {
    console.log(`Server started on 3000`);
});

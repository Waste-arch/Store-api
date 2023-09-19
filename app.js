require('dotenv').config();

//async

const express = require('express');
const app = express();

const notFoundMiddleWare = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<a href="/api/v1/products">product route</a>');
});

//products route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening port  ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start()

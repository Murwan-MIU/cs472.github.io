const express = require('express');

const courseRouter = require('./routers/courseRouter');

const app = express();

app.use(express.json());

app.use('/courses', courseRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});
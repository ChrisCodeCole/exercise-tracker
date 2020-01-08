require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const requestLogger = require('./middleware/requestLogger');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('open', (error) => {
    console.log('Connected to Database');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/exercises', exercisesRouter);

module.exports = app;

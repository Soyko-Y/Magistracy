// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import db from './app/config/db';
import routes from './app/routes/router';
import controller from './app/controllers/controller';

const app = express();
const port = 8000;
const mongoDB = process.env.MONGODB_URI || db.url;;

// mongoose.connect(mongoDB, { useNewUrlParser: true,  useCreateIndex: true})
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
mongoose.Promise = global.Promise;
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

module.exports = app;
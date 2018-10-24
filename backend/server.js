// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import db               from './config/db';
// import routes           from './app/routes';
import User from './model/user';

const app = express();
// const mongoDB   = process.env.MONGODB_URI || db.url;
// const database  = mongoose.connection;
const port = 8000;
const url = 'mongodb://localhost/blogDb';


// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;

// database.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/lots', routes);

app.get('/api/user/login', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true }, err => {
        if (err) throw err;
        User.find({
            username: req.body.username, password: req.body.password
        }, (err, user) => {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(500).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }

        })
    });
})

app.listen(port, () => {
    console.log('We are live on ' + port);
});
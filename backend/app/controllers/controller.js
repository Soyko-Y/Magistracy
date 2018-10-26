// controllers/lotController.js
import User from '../models/user';
import Post from '../models/post';
// import request  from 'request-promise';

// app.get('/api/user/login', (req, res) => {
//     res.send('Hello World!')
// })

exports.helloWorld = (req, res) => {
    res.status(200).send('Hello World!!!');
}

exports.loginUser = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    User.find({
        username: req.body.username,
        password: req.body.password
    })
        .then(response => {
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
            if (response.length === 1) {
                res.status(200).json(response)
            } else {
                res.status(500).send('Login failed');
            }
        })
        .catch(error => {
            res.status(500).json({ 'Error ': error.message });
        });
};

exports.createUser = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.save()
        .then(response => {
            res.status(200).send();
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
        })
        .catch(error => {
            res.status(500).json({ 'Error ': err.message });
        });
}

exports.createPost = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(response => {
            res.status(200).send(response);
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
        })
        .catch(error => {
            res.status(500).json({ 'Error ': err.message });
        });
}

exports.updatePost = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    Post.update({ _id: req.body.id }, { title: req.body.title, description: req.body.description })
        .then(response => {
            res.status(200).send(response);
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
        })
        .catch(error => {
            res.status(500).json({ 'Error ': err.message });
        });
}

exports.getAllPosts = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    Post.find()
        .sort({ _id: 1 })
        .exec()
        .then(response => {
            res.status(200).json(response);
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
        })
        .catch(error => {
            res.status(500).json({ 'Error ': err.message });
        });
}

exports.deletePost = (req, res) => {
    console.log('<---------------Request body--------------->');
    console.log(req.body);
    console.log('<------------------------------------------>');
    Post.findByIdAndRemove(req.body.id)
        .then(response => {
            res.status(200).send(response);
            console.log('<------------Response result--------------->');
            console.log(response);
            console.log('<------------------------------------------>');
        })
        .catch(error => {
            res.status(500).json({ 'Error ': err.message });
        });
}
// app.post('/api/user/create', (req, res) => {
//     mongoose.connect(url, err => {
//         if (err) throw err;
//         const user = new User({
//             name: req.body.name,
//             username: req.body.username,
//             password: req.body.password
//         })
//         user.save((err, res) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: res
//             })
//         })
//     });
// })

// app.post('/api/post/createPost', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true }, err => {
//         if (err) throw err;
//         const post = new Post({
//             title: req.body.title,
//             description: req.body.description
//         })
//         post.save((err, doc) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
//     });
// })

// app.post('/api/post/updatePost', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true }, err => {
//         if (err) throw err;
//         Post.update(
//             { _id: req.body.id },
//             { title: req.body.title, description: req.body.description },
//             (err, doc) => {
//                 if (err) throw err;
//                 return res.status(200).json({
//                     status: 'success',
//                     data: doc
//                 })
//             })
//     });
// })

// app.post('/api/post/getAllPost', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true }, err => {
//         if (err) throw err;
//         Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
//     });
// })

// app.post('/api/post/deletePost', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true }, err => {
//         if (err) throw err;
//         Post.findByIdAndRemove(req.body.id,
//             (err, doc) => {
//                 if (err) throw err;
//                 return res.status(200).json({
//                     status: 'success',
//                     data: doc
//                 })
//             })
//     });
// })
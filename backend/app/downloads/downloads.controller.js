const express = require('express');
const authorize = require('../_helpers/authorize');
const Role = require('../_helpers/role');
const router = express.Router();

// router.get('/adminsDownloads', authorize(Role.Admin), getAdminsDownloads);
// router.get('/usersDownloads', authorize(), getUsersDownloads);
router.get('/:file(*)', getDownload);

module.exports = router;

const filesLocation = '/home/yura/archives/';

function getDownload(req, res) {
    const file = req.params.file + '.7z';
    const fileLocation = filesLocation + file;
    res.download(fileLocation, file, function (err) {
        if (err) {
          console.log(err);
        }
    });
}

const express = require('express');
const authorize = require('../_helpers/authorize');
const downloadsService = require('./downloads.service');
const Role = require('../_helpers/role');
const router = express.Router();

router.get('/adminsDownloads', authorize(Role.Admin), getAdminsDownloads);
router.get('/usersDownloads', authorize(), getUsersDownloads);
router.get('/visitersDownloads', getVisitersDownloads);

module.exports = router;

function getAdminsDownloads(req, res, next) {
    downloadsService.getAdminsDownloads()
        .then(download => res.download(download))
        .catch(err => next(err));
}

function getUsersDownloads(req, res, next) {
    downloadsService.getUsersDownloads()
        .then(download => res.download(download))
        .catch(err => next(err));
}

function getVisitersDownloads(req, res, next) {
    downloadsService.getVisitersDownloads()
        .then(download => res.download(download))
        .catch(err => next(err));
}
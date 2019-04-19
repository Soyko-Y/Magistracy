module.exports = {
    getAdminsDownloads,
    getUsersDownloads,
    getVisitersDownloads,
};

async function getAdminsDownloads() {
    return await __dirname + '/downloadFiles/admin.txt';
}

async function getUsersDownloads() {
    return await __dirname + '/downloadFiles/user.txt';
}

async function getVisitersDownloads() {
    return await __dirname + '/downloadFiles/visiter.txt';
}
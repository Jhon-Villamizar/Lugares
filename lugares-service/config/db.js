const admin = require('firebase-admin');

var serviceAccount = require('./callejiandox2-lugares-firebase-adminsdk-36hlg-0c91b3ee1e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://callejiandox2-lugares.firebaseio.com'
});

module.exports = admin;
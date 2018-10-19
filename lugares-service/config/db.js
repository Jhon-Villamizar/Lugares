const mongoose = require('mongoose');
// const URL = 'mongodb://jhon:19870805jhon@ds027748.mlab.com:27748/lugares';
const URL = 'mongodb+srv://jhon:19870805jhon@cluster0-enqfy.mongodb.net/test?retryWrites=true';

mongoose.connect(URL, {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
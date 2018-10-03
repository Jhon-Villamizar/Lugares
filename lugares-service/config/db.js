const mongoose = require('mongoose');
const URL = 'mongodb://localhost/lugares';

mongoose.connect(URL, {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
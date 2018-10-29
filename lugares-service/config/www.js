const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./db');
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(cors({origin: 'http://localhost:4200'}));
// routes
app.use('/api', require('../routes/service.routes'));
// init server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
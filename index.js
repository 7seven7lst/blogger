const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const logger = require('morgan');
const cors = require('cors');
const Promise = require('bluebird');

const db = require('./models');
const apiRoutes = require('./api-routes');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 4001));

app.use('/api/v0', apiRoutes);

return db.sequelize.sync()
.then(() => {
  app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
  });
});
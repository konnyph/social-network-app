const { connect, connection } = require('mongoose');


connect('mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = connection;
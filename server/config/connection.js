const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}
);

module.exports = mongoose.connection;

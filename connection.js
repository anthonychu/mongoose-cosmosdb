const mongoose = require('mongoose');
mongoose.connect(process.env.COSMOSDB_URL);

module.exports = mongoose.connection;
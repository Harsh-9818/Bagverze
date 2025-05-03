const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development:mongoose-connection');

mongoose.connect(`${config.get("MONGODB_URI")}/Bagverze`)
.then(() => {
    dbgr("Connected to MongoDB successfully");
})
.catch((err) => {
    dbgr("Error connecting to MongoDB", err);
});

module.exports = mongoose.connection;
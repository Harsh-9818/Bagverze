const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Bagverze")
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

module.exports = mongoose.connection;
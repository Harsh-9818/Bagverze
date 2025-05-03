const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get('/', (req, res) => {
    res.send('Owner Home Page');
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", (req,res) => {
        res.send("Create route working");
    });
}


module.exports = router;   
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model")
const {generteToken} = require("../utils/generateToken");

router.get('/', (req, res) => {
    res.send('User Home Page');
});

router.post("/register", (req, res) => {
    try{
        let{email, password, fullname} = req.body;

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async(err, hash) => {
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname
                    });

                    let token = generteToken(user);
                    res.cookie("token", token);
                    res.send("user created successfully");
                };
            });
        });
    }catch{
        res.send(err.message)
    }
});

module.exports = router;
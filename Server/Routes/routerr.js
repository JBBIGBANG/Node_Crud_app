const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');


// router.get('/', (req, res) => {
//     console.log('Hello from router');
// });

router.post('/register', async(req, res) => {
    // console.log(req.body);
    const { name, username, mobile, email, password, description } = req.body;
    if(!name || !username || !mobile || !email || !password || !description) {
        return res.status(400).send({
            message: 'All fields are required'
        });
    }

        try {
            
            const preuser = await users.findOne({
                email: email
            });
            console.log(preuser);

            if(preuser) {
                return res.status(400).send({
                    message: 'User already exists'
                });
            }   else {
                const adduser = new users({
                    name: name,
                    username: username,
                    mobile: mobile,
                    email: email,
                    password: password,
                    description: description
                });
                await adduser.save();
                res.status(200).json(adduser);
                console.log(adduser);
                
            };

        } catch (error) {
            res.status(404).send({
                message: error.message
            });
        }
            
        });

router.get('/getdata',async(req, res) => {
    try {
        const userdata = await users.find();
        res.status(200).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(404).json(error)
    }

});

module.exports = router;
const router = require('express').Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// sign up functionality
router.post('/register', async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({email, username, password: hashpassword})
        await user.save()
        .then(() => res.status(200).json({message: 'Sign Up Successful'}));
    }
    catch(err) {
        res.status(200).json({message: 'User Already Exists'})
    }
});

// sign in functionality
router.post('/signin', async (req, res) => {
    try{
        const user = await User.findOne({email : req.body.email});
        if(!user){
            return res.status(400).json({message: 'User not found. Please sign up first'});
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: 'Password is not correct'});
        }

        const {password, ...others} = user._doc;
        res.status(200).json({user: others});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
});

module.exports = router;
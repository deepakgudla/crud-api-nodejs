const details = require("../model/detail")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;


// register
const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const existingUser = await details.findOne({ email: email});
        if (existingUser) {
            return res.status(400).json({message: "email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 15);
        const result = await details.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword,
         });
         const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);
         res.status(201).json({ user: result, token: token });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"})
    }
};

// login 
const login = async (req, res) => {
    const { email, password} = req.body;
    try {
        const existingUser = await details.findOne({email: email});
        if(!existingUser) {
            return res.status(404).json({message: "user not found"});
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword) {
            return res.status(400).json({message: "invalid credentials :("});
        }
        const token = jwt.sign(
            {email: existingUser.email, id: existingUser._id}, SECRET_KEY);
        res.status(200).json({user: existingUser, token: token});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

module.exports = { register, login };

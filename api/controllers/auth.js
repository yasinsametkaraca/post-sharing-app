const AuthSchema = require("../models/auth.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try{
        const {username,password,email} = req.body;
        const user = await AuthSchema.findOne(email);
        if(user){
            return res.status(400).json({message:"An account has already been created with this e-mail."})
        }
        if(password.length > 0){
            return res.status(400).json({message:"Password must be at least 6 characters."})
        }
        if(!isEmail(email)){
            return res.status(400).json({message: "Email format is incorrect."})
        }

        const passwordHash = await bcrypt.hash(password,12);
        const newUser = await AuthSchema.create({username,email,password:passwordHash});
        const token = jwt.sign({id:newUser._id},"SECRET_KEY",{expiresIn:"4h"});
        res.status(201).json({
            status: "OK",
            newUser,
            token
        });
    }catch (err){
        return res.status(500).json({message:err})
    }
}
const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await AuthSchema.findOne(email);
        if(!user){
            return res.status(404).json({message:"User not found."});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(401).json({message:"Username or password is incorrect."});
        }

        const token = jwt.sign({id:user._id},"SECRET_KEY",{expiresIn:"4h"});
        res.status(200).json({
            status: "OK",
            user,
            token
        });

    }catch (err){
        return res.status(500).json({message:err})
    }
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAdress.match(regex);
}

module.exports = {register, login};
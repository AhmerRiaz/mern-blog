import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signUp = async (req, res, next) => {
   const { username, email, password } = req.body;

   if(!username || !email || !password || username === '' || email === '' || password === '') {
       return next(errorHandler(400, 'Please provide all the fields'));
   }

   const hashedPassword = bcryptjs.hashSync(password, 10);

   const newUser = new User ({
       username,
       email,
       password: hashedPassword
   });

   try {
    await newUser.save();
    res.status(200).json('User created successfully');
  
   } catch (error) {
    next(error);    
   }
   
   }
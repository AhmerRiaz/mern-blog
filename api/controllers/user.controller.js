import bcryptjs from 'bcryptjs';
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";


export const user = (req, res) => { 
    res.json({'message': 'API is working now in controller... Hurray!'});
}


export const userUpdate = async (req, res, next) => {
    console.log(req.user._id, req.params.userId);
    console.log(req.body);
    if(req.user._id != req.params.userId) {
        return next(errorHandler(403, 'You can only update your own profile'));
    }

    if(req.body.password) {
        if(req.body.password < 6){
            return next(errorHandler(400, 'Password must be at least 6 characters'));
        }

        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    
    } 
    if(req.body.username) {
        if(req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
        }
        if(req.body.username.includes(' ')) {
            return next(errorHandler(400, 'Username cannot contain spaces'));
        }

        if(req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, 'User must be lowercase'));
        }

        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, 'Username must only contain letters and numbers'));
        }

    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture
                }
            }, 
            { new: true }
        )
        const { password, ...rest} = updatedUser._doc
        res.status(200).json(rest)

    } catch (error) {
        next(error)
    }
    

}
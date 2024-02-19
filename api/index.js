    import express from 'express';
    import mongoose from 'mongoose';
    import dotenv from 'dotenv';
    import userRoute from './routes/user.route.js';
    import authRoute from './routes/auth.route.js';
    import postRoute from './routes/post.route.js';
    import cookieParser from 'cookie-parser';

    dotenv.config();


    mongoose.connect(process.env.MONGO).then( () => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log(error);
    })

    const app = express();

    app.use(express.json());
    app.use(cookieParser());

    app.listen(3000, () => console.log('Server started on port 3000!!'));

    // app.get('/test', (req, res) => {
    // res.json({'message': 'Hello World!'});
    //})

    app.use('/api/user', userRoute);
    app.use('/api/auth', authRoute); 
    app.use('/api/post', postRoute);

    app.use((err, req, res, next) => { 

        const statusCode = err.status || 500;
        const message = err.message || 'Internal Server Error';
        res.status(statusCode).json({
            success:false,
            message,
            statusCode,

        })
    })
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();


mongoose.connect(process.env.MONGO).then( () => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Server started on port 3000!!'));

// app.get('/test', (req, res) => {
   // res.json({'message': 'Hello World!'});
//})

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute); 
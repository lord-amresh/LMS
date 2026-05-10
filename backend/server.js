import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import courseRouter from './routes/courseRouter.js';

const app = express();
const port = 4000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.use('/uploads', express.static('uploads'));

//  DB
connectDB();

// ROUTES
app.use('/api/course', courseRouter);

// APP PORT AND LISTEN
app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})
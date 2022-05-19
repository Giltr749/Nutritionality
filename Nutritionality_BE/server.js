import express from "express";
const app = express();
import "dotenv/config";
import cors from 'cors';
import signupController from './controllers/signupController.js';
import loginController from './controllers/loginController.js';
import signupValidation from './middlewares/signupValidation.js';
import loginValidation from './middlewares/loginValidation.js';
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from 'body-parser';
import db from './connection.js'
import jwt from 'jsonwebtoken';
import authenticateToken from './middlewares/authenticateToken.js';
import userRouter from './routes/userRoutes.js';
import restaurantRouter from './routes/restaurantRoutes.js'
import multer from "multer";
const upload = multer({ dest: process.env.UPLOAD_FOLDER + '/'});



const connection = db;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
    key: 'userId',
    secret: 'very-secret-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }, 
}));

const input = {
    "protein": 35,
    "sodium": 400
}

const restaurants = {
    "0": "tacobell",
    "1": "mc",
    "2": "tacobell",
    "3": "wendys",
    "4": "applebees",
    "5": "mc",
    "6": "tacobell",
    "7": "wendys",
    "8": "applebees",
    "9": "mc"
}


app.post('/signup',signupValidation, upload.single('picture'), signupController.signup);
app.post('/login',loginValidation, loginController.login);
app.use('/user',authenticateToken, userRouter);
app.use('/restaurant', authenticateToken, restaurantRouter);

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));

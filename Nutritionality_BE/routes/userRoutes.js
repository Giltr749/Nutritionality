import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import multer from "multer";

const upload = multer({ dest: process.env.UPLOAD_FOLDER + '/'});


router.route('/').get(userController.getUserById).put(upload.single('picture'), userController.updateUser);

export default router;

import express from "express";
const router = express.Router();
import restaurantController from "../controllers/restaurantController.js";



router.route('/').post(restaurantController.getRes);

export default router;

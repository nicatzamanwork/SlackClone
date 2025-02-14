const express = require("express");
const {authController}=require("../controllers/authController")
const router = express.Router();

router.get('/', authController.getAll);
router.get("/find/:userId",authController.getUser)
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/confirmcode', authController.confirmCode);


module.exports=router
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const {hasRole} = require("../middlewares/auth.middleware");

router.post("/login", AuthController.login);
router.get("/verify-token", AuthController.verifyToken);

module.exports = router;
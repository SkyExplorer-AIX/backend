const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const {hasRole} = require("../middlewares/auth.middleware"); // Use the correct path to UserController

router.post("/create", UserController.createUser);
router.get("/", UserController.getUserByEmail);
router.patch("/update/:email", UserController.updateUser);
router.patch("/update-role/:email", hasRole("staff"), UserController.updateUserRole);

module.exports = router;
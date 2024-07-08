const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const {hasRole} = require("../middlewares/auth.middleware"); // Use the correct path to UserController

router.post("/", hasRole("admin"), UserController.createUser);
router.get("/", UserController.getUserByEmail);
router.patch("/update/:email", UserController.updateUser);
router.patch("/update-role/:email", hasRole("admin"), UserController.updateUserRole);
router.delete("/delete/:email", hasRole("admin"), UserController.deleteUser);
router.get("/all", hasRole("admin"), UserController.getAllUsers);

module.exports = router;
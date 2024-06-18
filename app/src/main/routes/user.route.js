const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller"); // Use the correct path to UserController

router.post("/create", UserController.createUser);
router.get("/:email", UserController.getUserByEmail);
router.put("/update/:email", UserController.updateUser);
router.patch("/update-role/:email", UserController.updateUserRole);

module.exports = router;
const express = require("express");

const UsersController = require("../controller/users.js");

const router = express.Router();

//create - post
router.post("/", UsersController.createNewUser);

//read - get
router.get("/", UsersController.getAllUsers);

//update - patch
router.patch("/:idUser", UsersController.updateUser);

//delete - delete
router.delete("/:idUser", UsersController.deleteUser);

module.exports = router;

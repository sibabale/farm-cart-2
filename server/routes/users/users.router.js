const express  = require("express");
const usersController = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get('/:id', usersController.getUser);
usersRouter.post('/', usersController.createNewUser);

module.exports = usersRouter;
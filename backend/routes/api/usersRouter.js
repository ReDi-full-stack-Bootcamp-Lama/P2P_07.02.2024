//const express = require('express');
import express from 'express';
const router = express.Router();
//const userController = require('../../controllers/userController');
import UserController from "../../controllers/userController.js";

router.get('/',UserController.getAllUsers)
router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
//router.patch('/:id', UserController.updateUserPartial);
router.delete('/:id', UserController.deleteUser);

//module.exports = router;
export default router;



'use strict';

const UserController = require('../controllers/userController');

exports.UserRouter = (app) => {
  // 1. test API
  app.get('/hello', UserController.test);
};

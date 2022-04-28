'use strict';

// const userDao = require('../dao/userDao');

exports.test = async (req, res, next) => {
  res.send({
    isSuccess: true,
    code: 200,
    message: 'hello!',
  });
};

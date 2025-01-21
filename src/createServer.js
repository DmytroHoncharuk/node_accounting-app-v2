'use strict';

const express = require('express');
const cors = require('cors');
const userRouter = require('../src/routes/users.route');
const expensesRouter = require('../src/routes/expenses.route');

function createServer() {
  const app = express();

  app.use(cors());
  app.use('/users', express.json(), userRouter);
  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

module.exports = {
  createServer,
};

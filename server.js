const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const weatherRouter = require('../weather/weather-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/regiser', authRouter);
server.use('/api/login', authenticate, weatherRouter);

module.exports = server;

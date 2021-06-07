'use strict'

const express = require('express');
const session = require('express-session');
const redis = require("redis");
const redisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
process.env.ENV = process.env.ENV || 'local';

//let's use redis for session storage. We have other options too
const RedisConfig = require('./config/db_redis');
const RedisClient = redis.createClient(RedisConfig);
app.use(session({ secret: 'ssshhhhh', saveUninitialized: false, resave: false, store: new redisStore({ host: RedisConfig['host'], port: RedisConfig['port'], client: RedisClient }) }));

app.use(bodyParser.json({ limit: '60mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: true }));

const RouteURLs = require('./route');
require('./initialise')(app); //Intialise db,cache db connections

//Below function call will define all HTTP Routes for current http node server
RouteURLs(app);

app.listen(port, function () {
    console.log("Momos backend server is running on port " + port);
});

module.exports = app;
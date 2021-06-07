'use strict'
const RedisConfig = require('../../config/db_redis');

const Redis = require('redis');
const RedisClient = Redis.createClient(RedisConfig);
RedisClient.auth(RedisConfig.password);

RedisClient.on('connect', function () {
    console.log('Redis connected');
});

RedisClient.on('error', function (err) {
    console.log('Redis connection error: ' + err);
});

module.exports = RedisClient;


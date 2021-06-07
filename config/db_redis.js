const redisConnections = {
    "local": {
        host: 'localhost',
        port: 6379
    },
    "test": {
        host: 'localhost',
        port: 6379
    },
    "staging": {
        host: 'localhost',
        port: 6379
    },
    "production": {
        host: 'localhost',
        port: 6379
    }
};
module.exports = redisConnections[process.env.ENV];
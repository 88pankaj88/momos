'use strict'


var Initialise = function (app) {
    //Initialise Sentry Begin
    Async.parallel([function (callback) {
        //Initialise db,redis
        return callback();
    }], function (e) {
        //Done with all Initialisations
    });
};

module.exports = Initialise;
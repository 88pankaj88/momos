'use strict'

const Model = require('../model');

const User = {
    findUser: async function (input) {
        return await Model.user.find(input);
    },
    addUser: async function (input) {
        return await Model.user.add(input);
    }
};
module.exports = User;

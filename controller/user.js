'use strict'

const Utility = require('../utility/common');
const Api = require('../api');

const User = {
    login: async (req, res, next) => {
        try {
            let input = req.body;
            let users = await Api.user.findUser({ username: input.username, password: Utility.md5(input.password) });
            if (users.length == 0) {
                return next({ status: 401, message: 'Invalid credentials' });
            }
            //set session
            req.session.username = input.username;
            req.session.role = users[0].role;

            return next();
        } catch (err) {
            console.log(err);
            return next({ status: 500, message: 'Internal server error' });
        }
    },
    addUser: async (req, res, next) => {
        try {
            let input = req.body;
            let users = await Api.user.findUser({ username: input.username });
            if (users.length > 0) {
                return next({ status: 412, message: 'User already registered' });
            }
            let newUser = await Api.user.addUser({ username: input.username, password: Utility.md5(input.password), role: input.role })

            req.returnResponse = { newUser: newUser, message: 'success' };

            //set session if thats part of product
            return next();
        } catch (err) {
            console.log(err);
            return next({ status: 500, message: 'Internal server error' });
        }
    }
}


module.exports = User;
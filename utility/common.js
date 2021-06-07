'use strict'
const Md5 = require('md5');

const Common = {
    md5: function (str) {
        return Md5(str);
    }
};
module.exports = Common;

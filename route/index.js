
'use strict'

const Controller = require('../controller');
const UtilityConstant = require('../utility/constant')

const RouteURLs = function (app) {
     //Below function will initiate an empty response object for all APIs
     app.all("*", function (req, res, next) {
          req.returnResponse = {};
          req.returnResponse.error = {};
          return next();
     });

     // Passthroughs
     app.post("/streamsource/user/login", Controller.user.login, Controller.common.respond, Controller.common.handleError);
     app.post("/streamsource/user/signup", Controller.user.addUser, Controller.common.respond, Controller.common.handleError);
     app.post("/streamsource/user/addUserByAdmin", Controller.common.checkSession(RBAC_ADDUSERBYADMIN_ROLES), Controller.user.addUser, Controller.common.respond, Controller.common.handleError);
     app.post("/streamsource/user/xyz", Controller.common.checkSession(UtilityConstant.ALLOWED_ROLES.RBAC_XYZ_ROLES), Controller.common.xyz(), Controller.common.respond, Controller.common.handleError);
};
module.exports = RouteURLs;
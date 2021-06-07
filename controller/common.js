'use strict'


const Common = {
    respond: function (req, res, next) {
        /*if (!req.returnResponse.status && !req.doNotSendStatus) {
            req.returnResponse.status = Utility.constant.SUCCESS_RETURN_CODE;
        }*/
        res.json(req.returnResponse);
    },
    handleError: function (err, req, res, next) {
        //This function will handle all kind of Application Error, please keep it below all other routes
        Object.keys(err).forEach(function (key) {
            req.returnResponse[key] = err[key];
        });
        if ((!'status' in req.returnResponse) || isNaN(req.returnResponse.status)) {
            req.returnResponse.status = 500;
        }
        res.status(req.returnResponse.status);
        res.json(req.returnResponse);
    },
    checkSession: (allowedRoles) => {
        return async (req, res, next) => {
            if (!req.session['username']) {
                return next({ status: 401, message: 'Invalid call' });
            }
            if (allowedRoles.includes(req.session['role'])) {
                return next();
            }
            return next({ status: 403, message: 'Unauthorised Access' });
        }
    }
};
module.exports = Common;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const REGEX_SLASH_ENDING = /\/$/;
const middleware = (req, res, next) => {
    if (req.path.length > 1 && REGEX_SLASH_ENDING.test(req.path)) {
        res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));
    }
    else {
        next();
    }
};
const getMiddleware = () => middleware;
exports.default = getMiddleware;

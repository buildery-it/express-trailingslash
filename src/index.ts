import type { Request, Response, NextFunction } from 'express';

const REGEX_SLASH_ENDING = /\/$/;

const middleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.length > 1 && REGEX_SLASH_ENDING.test(req.path)) {
    res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));
  } else {
    next();
  }
};

const getMiddleware = () => middleware;

export default getMiddleware;

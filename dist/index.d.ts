import type { Request, Response, NextFunction } from 'express';
declare const getMiddleware: () => (req: Request, res: Response, next: NextFunction) => void;
export default getMiddleware;

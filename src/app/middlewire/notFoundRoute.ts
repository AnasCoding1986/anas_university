import { Request, Response, NextFunction } from 'express';
import httpStatus from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFoundRoute = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    error: 'Not Found',
  });
};

export default notFoundRoute;
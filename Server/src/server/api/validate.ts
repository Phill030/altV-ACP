import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export function authenticateToken(req: any, res: any, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, config.AUTH_SECRET_TOKEN, (err: any, user) => {
      if(err) return res.sendStatus(403);
      req.user = user;
      next();
    }); 
  }
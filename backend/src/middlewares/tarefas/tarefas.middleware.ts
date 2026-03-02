import { NextFunction } from "express";
import { Request, Response } from 'express';


export function tarefasMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware de tarefas executado');
    
    if(req.body == null){
        return res.status(400).json({ error: 'Requisição inválida: corpo da requisição é obrigatório' });
    }
    next();
}
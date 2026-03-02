"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarefas_routes_1 = __importDefault(require("./modules/tarefas/tarefas.routes"));
const routes = (0, express_1.Router)();
routes.use('/tarefas', tarefas_routes_1.default);
routes.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});
exports.default = routes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarefas_controller_1 = require("./tarefas.controller");
const routes = (0, express_1.Router)();
routes.use('', tarefas_controller_1.getTarefas);
exports.default = routes;

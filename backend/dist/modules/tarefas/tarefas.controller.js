"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTarefas = getTarefas;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getTarefas(req, res) {
    try {
        const tarefas = await prisma.tarefa.findMany();
        res.status(200).json(tarefas);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
}

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTarefas(req: Request, res: Response) {
    try {
        const tarefas = await prisma.tarefa.findMany();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
}

export async function createTarefa(req: Request, res: Response) {
    const { title, description } = req.body;
    try {
        const newTarefa = await prisma.tarefa.create({
            data: {
                titulo: title,
                descricao: description,
            },
        });
        res.status(201).json(newTarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
}

export async function updateTarefa(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const updatedTarefa = await prisma.tarefa.update({
            where: { id: Number(id) },
            data: {
                titulo: title,
                descricao: description
            },
        })
        res.status(200).json(updatedTarefa);

    } catch (error) {

    }
}

export async function deleteTarefa(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deletedTarefa = await prisma.tarefa.delete(
            {
                where: { id: Number(id) }
            }
        )
        res.status(200).json(deletedTarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
}
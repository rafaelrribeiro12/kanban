import { Component, computed, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskStatus } from '../../models/task';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-page',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  protected readonly statusTarefas = Object.values(TaskStatus).filter(status => status != TaskStatus.CANCELADA);

  protected quantidadeTarefas = computed(()=>{
    const pendentes = this.tarefas().filter(x => x.status === TaskStatus.PENDENTE).length;
    const emAndamento = this.tarefas().filter(x => x.status === TaskStatus.EM_ANDAMENTO).length;
    const concluidas = this.tarefas().filter(x => x.status === TaskStatus.CONCLUIDA).length;

    return {
      PENDENTE: pendentes,
      EM_ANDAMENTO: emAndamento,
      CONCLUIDA: concluidas
    }
  })

  tarefas: Signal<Task[]> = signal([]);
  draggedTask: Task | null = null;
  isDragging = false;

  onDragLeave() {
  }

  onDragEnd() {
    this.isDragging = false;
  }

  onDragStart(event: DragEvent, tarefa: Task) {
    this.isDragging = true;

    this.draggedTask = tarefa;
    event.dataTransfer?.setData('text/plain', tarefa.id.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, newStatus: Task['status']) {
    this.isDragging = false;
    event.preventDefault();
    if (!this.draggedTask) return;

    this.draggedTask.status = newStatus;

    this.draggedTask = null;

  }

  constructor() {
    this.tarefas().push({
      id: 1,
      titulo: 'Tarefa 1',
      descricao: 'Descrição da tarefa 1',
      status: TaskStatus.PENDENTE,
      dataCriacao: new Date()
    });
    this.tarefas().push({
      id: 2,
      titulo: 'Tarefa 2',
      descricao: 'Descrição da tarefa 2',
      status: TaskStatus.PENDENTE,
      dataCriacao: new Date()
    });
    this.tarefas().push({
      id: 3,
      titulo: 'Tarefa 3',
      descricao: 'Descrição da tarefa 3',
      status: TaskStatus.EM_ANDAMENTO,
      dataCriacao: new Date(),
      dataAtualizada: new Date(Date.now() - 1000 * 60 * 60 * 24) // Atualizada há 1 dia
    });
    this.tarefas().push({
      id: 4,
      titulo: 'Tarefa 4',
      descricao: 'Descrição da tarefa 4',
      status: TaskStatus.CONCLUIDA,
      dataCriacao: new Date()
    });
    this.tarefas().push({
      id: 5,
      titulo: 'Tarefa 5',
      descricao: 'Descrição da tarefa 5',
      status: TaskStatus.PENDENTE,
      dataCriacao: new Date()
    });
    this.tarefas().push({
      id: 6,
      titulo: 'Tarefa 6',
      descricao: 'Descrição da tarefa 6',
      status: TaskStatus.PENDENTE,
      dataCriacao: new Date()
    });
    this.tarefas().push({
      id: 7,
      titulo: 'Tarefa 7',
      descricao: 'Descrição da tarefa 7',
      status: TaskStatus.PENDENTE,
      dataCriacao: new Date()
    });


  }

}

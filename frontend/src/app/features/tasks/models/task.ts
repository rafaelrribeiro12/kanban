export enum TaskStatus {
  PENDENTE = "PENDENTE",
  EM_ANDAMENTO = "EM_ANDAMENTO",
  CONCLUIDA = "CONCLUIDA",
  CANCELADA = "CANCELADA",
}

export interface Task {
  id: number;
  titulo: string;
  descricao: string | null;
  status: TaskStatus;
  dataCriacao: Date;
  dataAtualizada?: Date;
}

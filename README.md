# Kanban

> 🚀 Projeto pessoal criado com o objetivo de aprender e praticar **Node.js**, **Express** e **Docker**. O projeto está em constante evolução, com novas funcionalidades e melhorias sendo adicionadas ao longo do tempo.

Aplicação Kanban para gerenciamento de tarefas, com backend em Node.js/Express, frontend em Angular e banco de dados PostgreSQL.

## Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

| Camada | Tecnologia |
| --- | --- |
| **Backend** | Node.js, Express, TypeScript |
| **Frontend** | Angular |
| **ORM** | Prisma |
| **Banco de dados** | PostgreSQL |
| **Containerização** | Docker & Docker Compose |

## Pré-requisitos

- [Docker](https://www.docker.com/) e Docker Compose

## Variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` contendo as variáveis do PostgreSQL e a URL de conexão usada pelo Prisma. Exemplo:

```env
# Database
DB_HOST=db
DB_PORT=5432
DB_USER=sa
DB_PASSWORD=123456
DB_NAME=kanban_db

# URL usada pelo Prisma (substitua user, pass, host, porta, db conforme necessário)
DATABASE_URL=postgresql://sa:123456@db:5432/kanban_db
```

- Substitua os valores pelo que for apropriado ao seu ambiente.

## Como rodar (desenvolvimento)

1. Clone o repositório

2. Suba os containers:

```sh
docker compose up --build
```

A API estará disponível em `http://localhost:3000` e o Frontend estará disponível em `http://localhost:4200`.

## Endpoints da API

Base URL: `/api`

| Método   | Rota              | Descrição            |
| -------- | ----------------- | -------------------- |
| `GET`    | `/health`         | Status da API        |
| `GET`    | `/tarefas`        | Listar tarefas       |
| `POST`   | `/tarefas`        | Criar tarefa         |
| `PATCH`  | `/tarefas/:id`    | Atualizar tarefa     |
| `DELETE` | `/tarefas/:id`    | Deletar tarefa       |


## Estrutura do Projeto

```
├── backend/
│   ├── prisma/                  # Schema e migrações do Prisma
│   ├── src/
│   │   ├── config/              # Configurações (env, database)
│   │   ├── middlewares/
│   │   │   └── tarefas/         # Middlewares de tarefas
│   │   ├── modules/
│   │   │   └── tarefas/         # Controller e rotas de tarefas
│   │   ├── app.ts               # Configuração do Express
│   │   ├── prisma.ts            # Instância do Prisma Client
│   │   ├── routes.ts            # Rotas principais
│   │   └── server.ts            # Entrada da aplicação
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── package.json
│
├── frontend/
│   ├── public/                  # Arquivos estáticos
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   └── tasks/
│   │   │   │       ├── components/
│   │   │   │       │   └── task-card/   # Componente de card de tarefa
│   │   │   │       ├── models/          # Modelos/interfaces de tarefa
│   │   │   │       ├── pages/
│   │   │   │       │   └── tasks-page/  # Página principal de tarefas
│   │   │   │       ├── services/        # Serviço de comunicação com a API
│   │   │   │       │   └── task.ts
│   │   │   │       └── tasks.routes.ts  # Rotas do módulo de tarefas
│   │   │   ├── app.ts                   # Componente raiz
│   │   │   ├── app.config.ts            # Configuração da aplicação
│   │   │   └── app.routes.ts            # Rotas principais
│   │   ├── index.html
│   │   ├── main.ts              # Bootstrap da aplicação
│   │   └── styles.css           # Estilos globais
│   ├── Dockerfile
│   ├── angular.json
│   └── package.json
│
└── docker/
    └── docker-compose.yml       # Orquestração dos containers
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
# Kanban

Aplicação Kanban para gerenciamento de tarefas, com backend em Node.js/Express e banco de dados PostgreSQL.

## Tecnologias

- **Backend:** Node.js, Express, TypeScript
- **ORM:** Prisma
- **Banco de dados:** PostgreSQL
- **Containerização:** Docker & Docker Compose

## Pré-requisitos

- [Docker](https://www.docker.com/) e Docker Compose

## Variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` contendo as variáveis do PostgreSQL e a URL de conexão usada pelo Prisma. Exemplo:

```env
# Credenciais do Postgres
DB_HOST=db
DB_PORT=5432
DB_USER=user
DB_PASSWORD=pass
DB_NAME=kanban_db

# URL usada pelo Prisma (substitua user, pass, host, porta, db conforme necessário)
DATABASE_URL=postgresql://user:pass@db:5432/kanban_db
```

- Substitua os valores pelo que for apropriado ao seu ambiente.

## Como rodar (desenvolvimento)

1. Clone o repositório

2. Suba os containers:

```sh
docker compose -f docker-compose.dev.yml up --build
```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

Base URL: `/api`

| Método   | Rota              | Descrição            |
| -------- | ----------------- | -------------------- |
| `GET`    | `/ping`           | Health check (pong)  |
| `GET`    | `/health`         | Status da API        |
| `GET`    | `/tarefas`        | Listar tarefas       |
| `POST`   | `/tarefas`        | Criar tarefa         |
| `PATCH`  | `/tarefas/:id`    | Atualizar tarefa     |
| `DELETE` | `/tarefas/:id`    | Deletar tarefa       |

## Estrutura do Projeto

```
backend/
├── prisma/            # Schema e migrações do Prisma
├── src/
│   ├── config/        # Configurações (env, database)
│   ├── middlewares/   # Middlewares
│   ├── modules/       # Módulos (controllers, routes)
│   ├── app.ts         # Configuração do Express
│   ├── routes.ts      # Rotas principais
│   └── server.ts      # Entrada da aplicação
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Scripts disponíveis

```sh
npm run dev       # Inicia em modo desenvolvimento (hot reload)
npm run build     # Compila o TypeScript
npm start         # Inicia a versão compilada
npm run db:migrate # Executa migrações do Prisma
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
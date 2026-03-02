FROM node:20-alpine

WORKDIR /app

# 1. Copia package.json primeiro (cache de deps)
COPY package*.json ./

# 2. Copia o Prisma schema ANTES do npm install
COPY prisma ./prisma

# 3. Instala dependências (agora o schema existe)
RUN npm install

# 4. Copia o resto do projeto
COPY . .

# 5. Gera o Prisma Client (garantido)
RUN npx prisma generate

# 6. Build do TS
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]
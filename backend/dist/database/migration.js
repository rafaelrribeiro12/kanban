"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
const pgMigrate = require('node-pg-migrate');
async function up(pgm) {
    pgm.createTable('tarefas', {
        id: 'id',
        titulo: { type: 'varchar(255)', notNull: true },
        concluida: { type: 'boolean', notNull: true, default: false },
        criada_em: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
    });
}
async function down(pgm) {
    pgm.dropTable('tarefas');
}

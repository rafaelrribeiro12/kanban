"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("postgres"));
const env_1 = require("./env");
const sql = (0, postgres_1.default)({
    user: env_1.env.database.user,
    host: env_1.env.database.host,
    database: env_1.env.database.name,
    password: env_1.env.database.password,
    port: env_1.env.database.port
});
exports.default = sql;

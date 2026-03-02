"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const client_1 = require("@prisma/client");
exports.prisma = global.prisma ??
    new client_1.PrismaClient({
        log: ['error'],
    });
if (process.env.NODE_ENV !== 'production')
    global.prisma = exports.prisma;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.use('/api', routes_1.default);
exports.default = app;

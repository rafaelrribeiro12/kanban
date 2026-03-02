import postgres from "postgres";
import {env} from "./env";

const sql = postgres({
    user: env.database.user,
    host: env.database.host,
    database: env.database.name,
    password: env.database.password,
    port: env.database.port        
});

export default sql;
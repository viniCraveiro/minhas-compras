import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@minhas-compras/db';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/minhascompras';
const client = postgres(connectionString);
export const db = drizzle(client, { schema });

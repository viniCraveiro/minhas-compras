import Database from 'better-sqlite3';
import path from 'path';

// Banco de dados local independente para a Web (Server Side)
const dbPath = path.join(process.cwd(), 'local_web.db');
const localDb = new Database(dbPath);

localDb.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    barcode TEXT,
    synced INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export const LocalProductService = {
  getAll() {
    return localDb.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
  },
  
  create(product: { name: string, price: number, barcode?: string }) {
    const id = Math.random().toString(36).substring(2, 11);
    localDb.prepare(
      'INSERT INTO products (id, name, price, barcode, synced) VALUES (?, ?, ?, ?, 0)'
    ).run(id, product.name, product.price, product.barcode || null);
    return id;
  }
};

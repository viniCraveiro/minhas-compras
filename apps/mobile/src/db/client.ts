import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("minhascompras_mobile.db");

export const initDb = async () => {
  try {
    await db.execAsync("PRAGMA foreign_keys = ON;");

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        barcode TEXT,
        local text not null,
        synced INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[MobileDB] Inicializado localmente");
  } catch (error) {
    console.error("[MobileDB] Erro:", error);
  }
};

export const ProductService = {
  async getAll() {
    return await db.getAllAsync(
      "SELECT * FROM products ORDER BY created_at DESC",
    );
  },

  async create(product: {
    name: string;
    price: number;
    barcode?: string;
    local: string;
  }) {
    const id = Math.random().toString(36).substring(2, 11);
    await db.runAsync(
      "INSERT INTO products (id, name, price, barcode, local, synced) VALUES (?, ?, ?, ?, ?, 0)",
      [id, product.name, product.price, product.barcode || null, product.local],
    );
    return id;
  },

  async getById(id: string): Promise<unknown> {
    const result = await db.getFirstAsync(
      "SELECT * FROM products WHERE id = ? LIMIT 1",
      [id],
    );
    console.log("getById result:", result);
    return result || null;
  },
};

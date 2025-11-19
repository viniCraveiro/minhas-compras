import * as SQLite from "expo-sqlite";

export const localDb = SQLite.openDatabaseSync("local-storage.db");

export function initLocalDb() {
    localDb.execSync(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        categoryId TEXT,
        price REAL,
        imageUrl TEXT
      );
    `);
}

export function saveProductLocally(product: any) {
    localDb.runSync(
        `INSERT OR REPLACE INTO products (id, name, categoryId, price, imageUrl) VALUES (?, ?, ?, ?, ?)`,
        [product.id, product.name, product.categoryId, product.price, product.imageUrl]
    );
}

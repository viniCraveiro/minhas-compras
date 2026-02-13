import { db } from "@/db/client";
import { Category } from "./Category.model";

export const CategoryRepository = {
  getAll(): Category[] {
    return db.getAllSync<Category>(
      `SELECT 
         id,
         name,
         color,
         icon,
         created_at as createdAt
       FROM categories
       ORDER BY id DESC`,
    );
  },

  create(data: Omit<Category, "id" | "createdAt">) {
    const id = Math.random().toString(36).substring(2, 11);

    db.runSync(
      `INSERT INTO categories 
       (id, name, color, icon, created_at)
       VALUES (?, ?, ?, ?,  ?)`,
      [id, data.name, data.color, data.icon, new Date().toISOString()],
    );
  },

  delete(id: string) {
    db.runSync(`DELETE FROM categories WHERE id = ?`, [id]);
  },
};

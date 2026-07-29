import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const feedback = sqliteTable("feedback", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  context: text("context").notNull().default(""),
  message: text("message").notNull(),
  anonymous: integer("anonymous", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

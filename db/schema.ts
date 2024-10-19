import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	username: varchar({ length: 32 }).notNull().unique(),
});

export const links = pgTable("links", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	link: text().notNull().unique(),
	tags: varchar({ length: 64 }),
	notes: text(),
	category: integer().references(() => categories.id),
});

export const categories = pgTable("categories", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 256 }).notNull(),
	colour: varchar({ length: 7 }).notNull(),
	icon: varchar({ length: 256 }).notNull(),
});

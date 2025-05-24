import { create } from "domain";
import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { url } from "inspector";
import { use } from "react";

export const userToMemes = pgTable("user_to_memes", {
  id: varchar('id', { length: 256 }).primaryKey(),
  userId: varchar('user_id', { length: 256 })
    .notNull(),
  memeId: varchar('meme_id', { length: 256 })
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const users = pgTable("users", {
  id: varchar('id', { length: 256 }).primaryKey(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  imageUrl: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  userToMemes: varchar('user_to_memes').references(() => userToMemes.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const memes = pgTable("memes", {
    id: varchar('id', {length:256}).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    userId:  varchar('users.id').references(() => users.id).notNull(),
    url : varchar('url',{ length: 255 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    unlockAt: timestamp('unlock_at', {withTimezone:true}).notNull().defaultNow(),
    userToMemes: varchar('user_to_memes').references(() => userToMemes.id)
})

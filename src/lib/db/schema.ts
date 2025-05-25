import {  pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

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

export type DrizzleMeme = typeof memes.$inferSelect;
export const memes = pgTable("memes", {
    id: varchar('id', {length:256}).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    userId:  varchar('users.id').references(() => users.id).notNull(),
    url : varchar('url',{ length: 255 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    unlockAt: timestamp('unlock_at', {withTimezone:true}).notNull().defaultNow(),
    deletedAt: timestamp('deleted_at', {withTimezone:true}),
    userToMemes: varchar('user_to_memes').references(() => userToMemes.id)
})

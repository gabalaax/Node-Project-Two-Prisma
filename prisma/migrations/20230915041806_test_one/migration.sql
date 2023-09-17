/*
  Warnings:

  - Added the required column `location` to the `Bookstore` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookstore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookstoreId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bookstore_bookstoreId_fkey" FOREIGN KEY ("bookstoreId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bookstore" ("bookstoreId", "created", "id", "name", "updated") SELECT "bookstoreId", "created", "id", "name", "updated" FROM "Bookstore";
DROP TABLE "Bookstore";
ALTER TABLE "new_Bookstore" RENAME TO "Bookstore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `public` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `public`,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

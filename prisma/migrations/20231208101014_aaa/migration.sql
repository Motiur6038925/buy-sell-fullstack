/*
  Warnings:

  - You are about to alter the column `roleType` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `roleType` VARCHAR(100) NOT NULL DEFAULT 'User';

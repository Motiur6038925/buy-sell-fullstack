/*
  Warnings:

  - Added the required column `image1` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `service` ADD COLUMN `image1` VARCHAR(300) NOT NULL,
    ADD COLUMN `image2` VARCHAR(300) NOT NULL,
    MODIFY `Features` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `roleType` VARCHAR(191) NOT NULL DEFAULT 'User';

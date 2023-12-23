-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Condition` VARCHAR(50) NOT NULL,
    `Authenticity` VARCHAR(50) NOT NULL,
    `Brand` VARCHAR(50) NOT NULL,
    `Model` VARCHAR(50) NOT NULL,
    `Edition` VARCHAR(50) NULL,
    `Features` VARCHAR(50) NULL,
    `Description` VARCHAR(300) NOT NULL,
    `Price` VARCHAR(50) NOT NULL,
    `photos` VARCHAR(50) NOT NULL,
    `Name` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(150) NOT NULL,
    `Phone` VARCHAR(150) NOT NULL,
    `Status` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Condition` VARCHAR(50) NOT NULL,
    `Authenticity` VARCHAR(50) NOT NULL,
    `Brand` VARCHAR(50) NOT NULL,
    `Model` VARCHAR(50) NOT NULL,
    `Edition` VARCHAR(50) NULL,
    `Features` VARCHAR(50) NULL,
    `Description` VARCHAR(300) NOT NULL,
    `Price` VARCHAR(50) NOT NULL,
    `Name` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(150) NOT NULL,
    `Phone` VARCHAR(150) NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

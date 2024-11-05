/*
  Warnings:

  - You are about to drop the `The` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'DONE');

-- DropTable
DROP TABLE "The";

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "pjId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "priority" "Priority" NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_pjId_fkey" FOREIGN KEY ("pjId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

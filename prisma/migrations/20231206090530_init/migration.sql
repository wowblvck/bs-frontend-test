-- CreateEnum
CREATE TYPE "Status" AS ENUM ('on_check', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "users" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "male" INTEGER NOT NULL,
    "female" INTEGER NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'on_check',
    "price" DOUBLE PRECISION NOT NULL,
    "tags" JSONB NOT NULL,
    "statistics_id" INTEGER NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_statistics_id_fkey" FOREIGN KEY ("statistics_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

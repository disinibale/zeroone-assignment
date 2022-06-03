/*
  Warnings:

  - You are about to drop the `TopicsOnNews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TopicsOnNews" DROP CONSTRAINT "TopicsOnNews_newsId_fkey";

-- DropForeignKey
ALTER TABLE "TopicsOnNews" DROP CONSTRAINT "TopicsOnNews_topicId_fkey";

-- DropTable
DROP TABLE "TopicsOnNews";

-- CreateTable
CREATE TABLE "NewsTopics" (
    "newsId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "NewsTopics_pkey" PRIMARY KEY ("newsId","topicId")
);

-- AddForeignKey
ALTER TABLE "NewsTopics" ADD CONSTRAINT "NewsTopics_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTopics" ADD CONSTRAINT "NewsTopics_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

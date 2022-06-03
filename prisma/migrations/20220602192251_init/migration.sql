/*
  Warnings:

  - You are about to drop the `_NewsToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NewsToTopic" DROP CONSTRAINT "_NewsToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_NewsToTopic" DROP CONSTRAINT "_NewsToTopic_B_fkey";

-- DropTable
DROP TABLE "_NewsToTopic";

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

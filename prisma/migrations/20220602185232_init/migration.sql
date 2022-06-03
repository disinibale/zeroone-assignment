/*
  Warnings:

  - You are about to drop the `NewsTopics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewsTopics" DROP CONSTRAINT "NewsTopics_newsId_fkey";

-- DropForeignKey
ALTER TABLE "NewsTopics" DROP CONSTRAINT "NewsTopics_topicId_fkey";

-- DropTable
DROP TABLE "NewsTopics";

-- CreateTable
CREATE TABLE "_NewsToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NewsToTopic_AB_unique" ON "_NewsToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_NewsToTopic_B_index" ON "_NewsToTopic"("B");

-- AddForeignKey
ALTER TABLE "_NewsToTopic" ADD CONSTRAINT "_NewsToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToTopic" ADD CONSTRAINT "_NewsToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

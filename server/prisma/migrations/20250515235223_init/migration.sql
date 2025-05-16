-- CreateTable
CREATE TABLE "wallpaper_queue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wallhavenId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "deviceId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "purity" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "aiProcessingStatus" TEXT DEFAULT 'pending',
    "aiTags" TEXT,
    "aiColors" TEXT,
    "aiContentLabels" TEXT,
    "aiNsfwScore" REAL,
    "aiProcessedAt" DATETIME
);

-- CreateTable
CREATE TABLE "wallpaper_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wallhavenId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "usedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" TEXT NOT NULL,
    "duration" INTEGER,
    "feedback" TEXT,
    "purity" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT,
    "colors" TEXT,
    "aspectRatio" REAL,
    "fileSize" INTEGER,
    "timeOfDay" INTEGER,
    "dayOfWeek" INTEGER,
    "explicitRating" INTEGER,
    "isFavorite" BOOLEAN
);

-- CreateTable
CREATE TABLE "favorite_wallpapers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wallhavenId" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "localPath" TEXT NOT NULL,
    "thumbnailPath" TEXT,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "tags" TEXT,
    "purity" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "aiTags" TEXT,
    "aiColors" TEXT,
    "aiContentLabels" TEXT,
    "aiNsfwScore" REAL
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "deviceIdentifier" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "resolution" TEXT,
    "lastSeen" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userPreferences" TEXT
);

-- CreateTable
CREATE TABLE "system_settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "scheduled_tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "data" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "scheduledFor" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "lastError" TEXT,
    "attempts" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "wallpaper_queue_status_priority_idx" ON "wallpaper_queue"("status", "priority");

-- CreateIndex
CREATE INDEX "wallpaper_queue_wallhavenId_idx" ON "wallpaper_queue"("wallhavenId");

-- CreateIndex
CREATE INDEX "wallpaper_queue_deviceId_status_idx" ON "wallpaper_queue"("deviceId", "status");

-- CreateIndex
CREATE INDEX "wallpaper_queue_aiProcessingStatus_idx" ON "wallpaper_queue"("aiProcessingStatus");

-- CreateIndex
CREATE INDEX "wallpaper_history_deviceId_usedAt_idx" ON "wallpaper_history"("deviceId", "usedAt");

-- CreateIndex
CREATE INDEX "wallpaper_history_wallhavenId_idx" ON "wallpaper_history"("wallhavenId");

-- CreateIndex
CREATE INDEX "wallpaper_history_timeOfDay_idx" ON "wallpaper_history"("timeOfDay");

-- CreateIndex
CREATE INDEX "wallpaper_history_dayOfWeek_idx" ON "wallpaper_history"("dayOfWeek");

-- CreateIndex
CREATE INDEX "wallpaper_history_category_idx" ON "wallpaper_history"("category");

-- CreateIndex
CREATE INDEX "favorite_wallpapers_wallhavenId_idx" ON "favorite_wallpapers"("wallhavenId");

-- CreateIndex
CREATE INDEX "favorite_wallpapers_userId_idx" ON "favorite_wallpapers"("userId");

-- CreateIndex
CREATE INDEX "favorite_wallpapers_purity_idx" ON "favorite_wallpapers"("purity");

-- CreateIndex
CREATE INDEX "favorite_wallpapers_category_idx" ON "favorite_wallpapers"("category");

-- CreateIndex
CREATE UNIQUE INDEX "devices_deviceIdentifier_key" ON "devices"("deviceIdentifier");

-- CreateIndex
CREATE INDEX "devices_deviceIdentifier_idx" ON "devices"("deviceIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "system_settings_key_key" ON "system_settings"("key");

-- CreateIndex
CREATE INDEX "system_settings_key_idx" ON "system_settings"("key");

-- CreateIndex
CREATE INDEX "scheduled_tasks_type_status_idx" ON "scheduled_tasks"("type", "status");

-- CreateIndex
CREATE INDEX "scheduled_tasks_scheduledFor_status_idx" ON "scheduled_tasks"("scheduledFor", "status");

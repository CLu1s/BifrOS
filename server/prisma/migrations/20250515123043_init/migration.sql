-- CreateTable
CREATE TABLE "wallpapers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "favorites" INTEGER NOT NULL,
    "source" TEXT,
    "purity" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "dimension_x" INTEGER NOT NULL,
    "dimension_y" INTEGER NOT NULL,
    "resolution" TEXT NOT NULL,
    "ratio" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "file_type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "uploader_id" TEXT NOT NULL,
    CONSTRAINT "wallpapers_uploader_id_fkey" FOREIGN KEY ("uploader_id") REFERENCES "users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "group" TEXT NOT NULL,
    "avatar_large" TEXT NOT NULL,
    "avatar_medium" TEXT NOT NULL,
    "avatar_small" TEXT NOT NULL,
    "avatar_tiny" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "thumbnails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "large" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "wallpaperId" TEXT NOT NULL,
    CONSTRAINT "thumbnails_wallpaperId_fkey" FOREIGN KEY ("wallpaperId") REFERENCES "wallpapers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alias" TEXT,
    "category_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "purity" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tags_on_wallpapers" (
    "wallpaper_id" TEXT NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("wallpaper_id", "tag_id"),
    CONSTRAINT "tags_on_wallpapers_wallpaper_id_fkey" FOREIGN KEY ("wallpaper_id") REFERENCES "wallpapers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tags_on_wallpapers_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "colors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hex_code" TEXT NOT NULL,
    "wallpaper_id" TEXT NOT NULL,
    CONSTRAINT "colors_wallpaper_id_fkey" FOREIGN KEY ("wallpaper_id") REFERENCES "wallpapers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "thumbnails_wallpaperId_key" ON "thumbnails"("wallpaperId");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE INDEX "colors_hex_code_idx" ON "colors"("hex_code");

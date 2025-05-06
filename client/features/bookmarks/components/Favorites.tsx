"use client";
import { Image, Link } from "@heroui/react";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import { useEffect } from "react";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useBookmark();
  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);
  return (
    <div className={" flex flex-col gap-4"}>
      <div className={"border-none"}>
        <div className={"flex flex-wrap justify-start gap-2 "}>
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <Link
                href={favorite.url}
                key={favorite.id}
                target={"_blank"}
                className={"flex flex-col  shrink-0 gap-2 text-center border"}
              >
                <Image
                  src={favorite.favicon || "/favicon.svg"}
                  alt={favorite.ogTitle}
                  className={"rounded h-10 xl:h-8  object-cover"}
                />
              </Link>
            ))
          ) : (
            <p>No favorites yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

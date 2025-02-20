import { Image, Link } from "@heroui/react";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

const Favorites = () => {
  const { favorites } = useBookmark();
  return (
    <div className={"p-2 w-full flex flex-col gap-4"}>
      <h2 className={"text-lg font-semibold"}> Favorites</h2>
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
                  height={45}
                  className={"rounded   object-cover"}
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

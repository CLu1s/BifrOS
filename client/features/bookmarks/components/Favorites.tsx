import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

const Favorites = () => {
  const { favorites } = useBookmark();
  return (
    <Card className={"p-2"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Bookmarks Favorites</h2>
      </CardHeader>
      <CardBody>
        <div className={"flex justify-start gap-6 "}>
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <Link
                href={favorite.url}
                key={favorite.id}
                target={"_blank"}
                className={"flex flex-col shrink-0 gap-2 text-center"}
              >
                <Image
                  src={favorite.favicon}
                  alt={favorite.ogTitle}
                  height={60}
                  className={"rounded   object-cover"}
                />
              </Link>
            ))
          ) : (
            <p>No favorites yet</p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Favorites;

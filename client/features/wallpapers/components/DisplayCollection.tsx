import { useSelector } from "react-redux";
import { selectActiveCollection } from "@/features/wallpapers/redux/wallpaperSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CollectionPage from "./CollectionPage";

const DisplayCollection = () => {
  const collection = useSelector(selectActiveCollection);
  const [pagesCount, setPagesCount] = useState(1);
  // const [config, setConfig] = useState<CollectionConfig>();
  const [pages, setPages] = useState<Record<string, number | string>[]>([
    {
      collectionID: collection?.id ?? 0,
      index: 1,
    },
  ]);
  const totalPages = Math.ceil(
    (collection?.count ?? 1) / (collection?.per_page ?? 24),
  );

  useEffect(() => {
    setPagesCount(1);
    setPages([
      {
        collectionID: collection?.id ?? 0,
        index: 1,
      },
    ]);
  }, [collection]);

  const renderPages = pages.map((page) => (
    <CollectionPage
      key={page.index}
      collectionID={page.collectionID}
      index={page.index as number}
    />
  ));

  return (
    <div>
      <div
        className="w-full max-h-[83vh] overflow-y-auto  flex flex-col  gap-4  p-6 "
        id="scrollableDiv"
      >
        <InfiniteScroll
          scrollableTarget={"scrollableDiv"}
          dataLength={renderPages.length} //This is important field to render the next data
          next={() => {
            const newIndex = pagesCount + 1;
            setPagesCount(newIndex);
            setPages((prevState) => [
              ...prevState,
              {
                collectionID: collection?.id ?? 0,
                index: newIndex,
              },
            ]);
          }}
          hasMore={pagesCount <= totalPages}
          loader={<h4>perro...</h4>}
          endMessage={
            <div
              className={"font-semibold col-span-3 w-full m-auto text-center"}
            >
              <p>Yay! You have seen it all</p>
            </div>
          }
          className={
            " m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-8 w-full"
          }
        >
          {renderPages}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DisplayCollection;

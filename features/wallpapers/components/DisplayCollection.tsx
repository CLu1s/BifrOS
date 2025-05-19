"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import CollectionPage from "./CollectionPage";
import useCollection from "@/features/wallpapers/hooks/useCollection";

const DisplayCollection = () => {
  const { activeData, setCurrentPage, metadata } = useCollection();

  const totalPages = metadata?.last_page ?? 1;
  const currentPage = metadata?.current_page ?? 1;

  const renderPages = activeData.map((page, index) => (
    <CollectionPage key={index} images={page} />
  ));

  const controlNextPage = () => {
    const newIndex = currentPage + 1;
    setCurrentPage(newIndex);
  };

  return (
    <div>
      <div
        className=" m-auto max-h-[85vh]  overflow-y-auto  flex flex-col   py-4 "
        id="scrollableDiv"
      >
        <InfiniteScroll
          scrollableTarget={"scrollableDiv"}
          dataLength={renderPages.length} //This is important field to render the next data
          next={controlNextPage}
          hasMore={currentPage <= totalPages}
          loader={<div className={"container m-auto"}>Cargando...</div>}
          endMessage={
            <div
              className={"font-semibold col-span-3 w-full m-auto text-center"}
            >
              <p>Yay! You have seen it all</p>
            </div>
          }
          className={
            "m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-7  gap-4 md:gap-6 2xl:gap-6 md:px-10 xl:px-28  2xl:px-32"
          }
        >
          {renderPages}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DisplayCollection;

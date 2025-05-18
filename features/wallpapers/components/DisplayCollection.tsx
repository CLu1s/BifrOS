"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import CollectionPage from "./CollectionPage";
import useCollection from "@/features/wallpapers/hooks/useCollection";
import { useCallback } from "react";

const DisplayCollection = () => {
  const { activeData, setCurrentPage, metadata } = useCollection();

  const totalPages = metadata?.last_page ?? 1;
  const currentPage = metadata?.current_page ?? 1;

  const renderPages = activeData.map((page, index) => (
    <CollectionPage key={index} images={page} />
  ));

  const controlNextPage = useCallback(() => {
    {
      const newIndex = currentPage + 1;
      setCurrentPage(newIndex);
    }
  }, [currentPage, setCurrentPage]);

  return (
    <div>
      <div
        className="container m-auto max-h-[83vh] overflow-y-auto  flex flex-col  gap-4  p-6 "
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
            "  m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-4 xl:gap-4 2xl:gap-8 w-full"
          }
        >
          {renderPages}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DisplayCollection;

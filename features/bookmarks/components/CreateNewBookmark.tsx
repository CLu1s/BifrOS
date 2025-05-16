"use client";
import { Input } from "@/components/ui/input";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

function CreateNewBookmark() {
  const { setFilterByTerm } = useBookmark();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByTerm(e.target.value);
  };

  return (
    <div className={"container flex flex-col justify-center m-auto"}>
      <Input placeholder={"Search"} onChange={handleSearch} />
    </div>
  );
}

export default CreateNewBookmark;

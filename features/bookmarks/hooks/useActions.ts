import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {
  addCategory,
  setActiveCategory,
  addBookmark,
  setCategories,
  removeBookmark,
  setFilterByTerm,
} from "@/features/bookmarks/redux/bookmarksSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      setCategories,
      addCategory,
      setActiveCategory,
      addBookmark,
      removeBookmark,
      setFilterByTerm,
    },
    dispatch,
  );

  return { ...actions };
};

export default useActions;

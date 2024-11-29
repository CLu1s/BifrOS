import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {
  addCategory,
  setActiveCategory,
  addBookmark,
  setCategories,
  removeBookmark,
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
    },
    dispatch,
  );

  return { ...actions };
};

export default useActions;

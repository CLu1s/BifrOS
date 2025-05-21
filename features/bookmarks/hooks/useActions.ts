import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {
  addBookmark,
  removeBookmark,
  setFilterByTerm,
} from "@/features/bookmarks/redux/bookmarksSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      addBookmark,
      removeBookmark,
      setFilterByTerm,
    },
    dispatch,
  );

  return { ...actions };
};

export default useActions;

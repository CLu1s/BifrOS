import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {
  addCategory,
  setActiveCategory,
  setCategories,
} from "@/features/bookmarks/redux/bookmarksSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { setCategories, addCategory, setActiveCategory },
    dispatch,
  );

  return { ...actions };
};

export default useActions;

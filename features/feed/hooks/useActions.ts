import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { setFeedHasMore } from "@/features/feed/redux/feedSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ setFeedHasMore }, dispatch);

  return { ...actions };
};

export default useActions;

import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { setFeeds } from "@/features/feed/redux/feedSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ setFeeds }, dispatch);

  return { ...actions };
};

export default useActions;

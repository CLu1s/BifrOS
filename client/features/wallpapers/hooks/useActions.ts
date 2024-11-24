import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  openModal,
  closeModal,
} from "@/features/wallpapers/redux/wallpaperSlice";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ openModal, closeModal }, dispatch);

  return { ...actions };
};

export default useActions;

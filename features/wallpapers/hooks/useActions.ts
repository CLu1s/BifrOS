import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  openModal,
  closeModal,
  setCollectionsInfo,
  setActiveCollection,
  addPage,
  addMetadata,
} from "@/features/wallpapers/redux/wallpaperSlice";
import { useMemo } from "react";

const useActions = () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          openModal,
          closeModal,
          setCollectionsInfo,
          setActiveCollection,
          addPage,
          addMetadata,
        },
        dispatch,
      ),
    [dispatch],
  );

  return { ...actions };
};

export default useActions;

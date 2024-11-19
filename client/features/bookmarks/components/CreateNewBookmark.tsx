"use client";
import { Button, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { addBookmark } from "@/features/bookmarks/redux/bookmarksSlice";
import { useDispatch } from "react-redux";

type Inputs = {
  url: string;
};

function CreateNewBookmark() {
  const dispatch = useDispatch();
  const { resetField, register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("Adding bookmark");
    const { url } = data;

    try {
      const serverUrl = process.env.NEXT_PUBLIC_SAVE_BOOKMARK_URL || "";
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const result = await response.json();
      dispatch(addBookmark(result));

      resetField("url");
      toast.success("Bookmark added", {
        id: toastId,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to extract metadata", {
        id: toastId,
      });
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col  lg:flex-row  w-full gap-4"}
    >
      <Input {...register("url", { required: true })} />
      <Button type={"submit"}>Add link</Button>
    </form>
  );
}

export default CreateNewBookmark;

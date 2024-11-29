"use client";
import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

type Inputs = {
  url: string;
};

function CreateNewBookmark() {
  const { createBookmark } = useBookmark();
  const { resetField, register, handleSubmit, setFocus } = useForm<Inputs>();

  useEffect(() => {
    setFocus("url");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { url } = data;
    await createBookmark(url);
    resetField("url");
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

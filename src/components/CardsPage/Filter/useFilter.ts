import { useAppSelector } from "@/hooks/state";
import { useForm } from "react-hook-form";

export const useFilter = () => {
  const { classes } = useAppSelector((state) => state.Meta.allMeta) || {};
  const classList = classes?.map((item) => {
    return { value: item.slug, name: item.name };
  });
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      class: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  console.log(classes);
  const handlerSelectChange = (name: string, value: string) => {
    return () => {
      if (name === "class") {
        setValue(name, value);
      }
    };
  };

  return { control, classList, handleSubmit, handlerSelectChange };
};

import { sendEmail } from "@/lib/http/EmailJS";
import { checkIsNumber } from "@/lib/service/service";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const useFormFeedback = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const handlerChangePhone = (
    value: any,
    onChange: (...event: any[]) => void,
  ) => {
    if (checkIsNumber(value)) {
      onChange(value);
    }
  };

  const handlerSubmit: SubmitHandler<IFormInput> = (data, event) => {
    sendEmail(event?.target);
  };

  return { control, errors, handleSubmit, handlerSubmit, handlerChangePhone };
};

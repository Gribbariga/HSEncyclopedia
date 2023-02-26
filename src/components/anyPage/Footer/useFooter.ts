import { sendEmail } from "@/lib/http/EmailJS";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const useFooter = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const handlerSubmit: SubmitHandler<IFormInput> = (data, event) => {
    sendEmail(event?.target);
    console.log();
  };

  return { control, handleSubmit, handlerSubmit };
};

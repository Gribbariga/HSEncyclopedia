import React from "react";
import { Controller } from "react-hook-form";
import { useFormFeedbackStyles } from "./style";
import { useFormFeedback } from "./useFormFeedback";

const FormFeedback = () => {
  const { control, errors, handleSubmit, handlerSubmit, handlerChangePhone } =
    useFormFeedback();
  return (
    <FormSC onSubmit={handleSubmit(handlerSubmit)}>
      <>
        <FormTitleSC>Форма обратной связи</FormTitleSC>
        <Controller
          name={"name"}
          control={control}
          rules={{ required: "Обязательное поле" }}
          render={({ field, formState }) => {
            return (
              <>
                <InputMUI
                  label="Ваше имя"
                  variant="outlined"
                  {...field}
                  error={!!errors.name}
                />

                <ErrorInputTextSC isVisible={!!errors.name}>
                  {!!errors.name ? errors.name.message : ""}
                </ErrorInputTextSC>
              </>
            );
          }}
        />
        <Controller
          name={"phone"}
          control={control}
          rules={{ required: "Обязательное поле" }}
          render={({ field }) => {
            return (
              <>
                <InputMUI
                  label="Ваш Телефон"
                  variant="outlined"
                  {...field}
                  error={!!errors.phone}
                  onChange={(e) =>
                    handlerChangePhone(e.target.value, field.onChange)
                  }
                />
                <ErrorInputTextSC isVisible={!!errors.phone}>
                  {errors.phone ? errors.phone.message : ""}
                </ErrorInputTextSC>
              </>
            );
          }}
        />
        <Controller
          name={"email"}
          control={control}
          rules={{
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Не валидный email",
            },
          }}
          render={({ field, formState }) => {
            return (
              <>
                <InputMUI
                  label="Ваша почта"
                  variant="outlined"
                  {...field}
                  error={!!errors.email}
                />
                <ErrorInputTextSC isVisible={!!errors.email}>
                  {errors.email ? errors.email.message : ""}
                </ErrorInputTextSC>
              </>
            );
          }}
        />
        <Controller
          name={"message"}
          control={control}
          render={({ field }) => {
            return <TextAreaMUI multiline={true} rows={7} {...field} />;
          }}
        />
      </>

      <SubmitButtonSC type="submit" variant="contained">
        Отправить
      </SubmitButtonSC>
    </FormSC>
  );
};

const {
  FormSC,
  InputMUI,
  TextAreaMUI,
  FormTitleSC,
  SubmitButtonSC,
  ErrorInputTextSC,
} = useFormFeedbackStyles();

export default React.memo(FormFeedback);

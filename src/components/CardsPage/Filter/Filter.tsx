import Select from "@/components/UI/Select/Select";
import { ContainerSC } from "@/components/anyPage/Container/Container";
import React from "react";
import { useFilterStyle } from "./style";
import { Controller } from "react-hook-form";
import { useFilter } from "./useFilter";

const Filter = () => {
  const { control, classList, handleSubmit, handlerSelectChange } = useFilter();
  return (
    <BackgroundSC>
      <ContainerSC>
        <FormSC onSubmit={handleSubmit(() => console.log(1))}>
          <Controller
            name={"class"}
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field, formState }) => {
              console.log(field.value);
              return (
                <Select
                  onChange={handlerSelectChange}
                  name={field.name}
                  label={"Класс"}
                  value={field.value}
                  list={classList || []}
                  styleSelect={SelectCSS}
                  styleMenu={SelectMenuCSS}
                />
              );
            }}
          />
        </FormSC>
      </ContainerSC>
    </BackgroundSC>
  );
};

const { FormSC, SelectCSS, BackgroundSC, SelectMenuCSS } = useFilterStyle();

export default React.memo(Filter);

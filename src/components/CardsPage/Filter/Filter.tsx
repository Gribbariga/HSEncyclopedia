import Select from "@/components/UI/Select/Select";
import { ContainerSC } from "@/components/anyPage/Container/Container";
import React from "react";
import { useFilterStyle } from "./style";
import { Controller, set } from "react-hook-form";
import { useFilter } from "./useFilter";
import { Button } from "@mui/material";

const Filter = () => {
  const {
    control,
    classList,
    setsList,
    handleSubmit,
    handleSearch,
    handlerSubmit,
    handlerSelect,
    selectCallback,
    handleSearchButton,
  } = useFilter();
  return (
    <BackgroundSC>
      <ContainerSC>
        <FormSC
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <SelectWrapperSC>
            <Controller
              name={"set"}
              control={control}
              rules={{}}
              render={({ field, formState }) => {
                return (
                  <Select
                    onChange={handlerSelect("set")}
                    name={field.name}
                    label={"Формат"}
                    value={field.value}
                    list={setsList || []}
                    styleSelect={SelectFormatCSS}
                    styleMenu={SelectMenuCSS}
                    onSelectCallback={selectCallback("set")}
                  />
                );
              }}
            />
            <Controller
              name={"class"}
              control={control}
              rules={{}}
              render={({ field, formState }) => {
                return (
                  <Select
                    onChange={handlerSelect("class")}
                    name={field.name}
                    label={"Класс"}
                    value={field.value}
                    list={classList || []}
                    styleSelect={SelectClassCSS}
                    styleMenu={SelectMenuCSS}
                    onSelectCallback={selectCallback("class")}
                  />
                );
              }}
            />
          </SelectWrapperSC>
          <SearchWrapperSC>
            <Controller
              name={"search"}
              control={control}
              rules={{}}
              render={({ field, formState }) => {
                return (
                  <SearchInput
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleSearch(e.target.value)
                    }
                    placeholder="Поиск"
                  />
                );
              }}
            />
            <SearchButtonSC onClick={handleSearchButton}>Искать</SearchButtonSC>
          </SearchWrapperSC>
        </FormSC>
      </ContainerSC>
    </BackgroundSC>
  );
};

const {
  FormSC,
  SearchInput,
  BackgroundSC,
  SelectMenuCSS,
  SelectClassCSS,
  SearchButtonSC,
  SelectWrapperSC,
  SearchWrapperSC,
  SelectFormatCSS,
} = useFilterStyle();

export default React.memo(Filter);

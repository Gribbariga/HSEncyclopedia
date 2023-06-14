import Select from "@/components/UI/Select/Select";
import { ContainerSC } from "@/components/anyPage/Container/Container";
import React from "react";
import { useFilterStyle } from "./style";
import { Controller, FormProvider, set } from "react-hook-form";
import { useFilter } from "./useFilter";
import { Button } from "@mui/material";
import SortStat from "./SortStat/SortStat";

const Filter = () => {
  const {
    method,
    control,
    setsList,
    classList,
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
        <FormProvider {...method}>
          <FormSC
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}>
            <TopWrapperSC>
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
                <SearchButtonSC onClick={handleSearchButton}>
                  Искать
                </SearchButtonSC>
              </SearchWrapperSC>
            </TopWrapperSC>

            {/* <SortStat /> */}
            {/* <button>12421421</button> */}
          </FormSC>
        </FormProvider>
      </ContainerSC>
    </BackgroundSC>
  );
};

const {
  FormSC,
  SearchInput,
  TopWrapperSC,
  BackgroundSC,
  SelectMenuCSS,
  SelectClassCSS,
  SearchButtonSC,
  SelectWrapperSC,
  SearchWrapperSC,
  SelectFormatCSS,
} = useFilterStyle();

export default React.memo(Filter);

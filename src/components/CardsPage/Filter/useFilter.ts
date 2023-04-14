import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { useForm } from "react-hook-form";
import cards from "../../../store/cardProccess/cardsProcess";
import { fetchCards } from "@/store/cardProccess/asyncThunk/cardsApi";

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const { classes, sets } = useAppSelector((state) => state.Meta.allMeta) || {};
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
      set: "",
      search: "",
      // message: "",
    },
  });
  let setsList = [
    { name: "Стандартный формат", value: "standart" },
    { name: "Вольный формат", value: "wild" },
    { name: "Классический формат", value: "classic-cards" },
    { name: "Карты арены", value: "arena" },
    { name: "Карты дуэлей", value: "duels" },
  ];
  if (sets) {
    for (let i = 0; i < sets?.length; i++) {
      setsList.push({ name: sets[i].name, value: sets[i].slug });
    }
  }

  // const setsSelect = [{ name: "Стандартный формат", value: "standart" }];
  const handlerSelect = (selectName: "class" | "set") => {
    return (value: string) => setValue(selectName, value);
  };
  const selectCallback = (filterType: "class" | "set") => {
    return (...args: any[]) => {
      dispatch(
        cards.actions.setFilter({ filterType: filterType, value: args[0] }),
      );
      dispatch(fetchCards({}));
    };
  };
  const handleSearch = (value: string) => {
    dispatch(cards.actions.setFilter({ filterType: "search", value: value }));
  };
  const handleSearchButton = () => {
    console.log(111);
    dispatch(fetchCards({}));
  };
  const handlerSubmit = (e: any, data: any) => {};
  return {
    control,
    classList,
    setsList,
    handleSubmit,
    handleSearch,
    handlerSubmit,
    handlerSelect,
    selectCallback,
    handleSearchButton,
  };
};

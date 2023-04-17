import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IStateArr {
  number: number;
  isActive: boolean;
}

interface IState {
  value: number;
  isActive: boolean;
}

type name = "attack" | "health" | "mana";

export const useSortStat = () => {
  const [attack, setAttack] = useState<IState[]>([
    { value: 1, isActive: false },
    { value: 2, isActive: false },
    { value: 3, isActive: false },
    { value: 4, isActive: false },
    { value: 5, isActive: false },
    { value: 6, isActive: false },
    { value: 7, isActive: false },
    { value: 8, isActive: false },
    { value: 9, isActive: false },
    { value: 10, isActive: false },
  ]);

  const [health, setHealth] = useState<IState[]>([
    { value: 1, isActive: false },
    { value: 2, isActive: false },
    { value: 3, isActive: false },
    { value: 4, isActive: false },
    { value: 5, isActive: false },
    { value: 6, isActive: false },
    { value: 7, isActive: false },
    { value: 8, isActive: false },
    { value: 9, isActive: false },
    { value: 10, isActive: false },
  ]);

  const [mana, setMana] = useState<IState[]>([
    { value: 1, isActive: false },
    { value: 2, isActive: false },
    { value: 3, isActive: false },
    { value: 4, isActive: false },
    { value: 5, isActive: false },
    { value: 6, isActive: false },
    { value: 7, isActive: false },
    { value: 8, isActive: false },
    { value: 9, isActive: false },
    { value: 10, isActive: false },
  ]);

  const setValueForm = (name: name, value: IState[]) => {
    setValue(name, value);
  };
  const setStateValue = (arrState: IState[], number: number) => {
    return arrState.map((item, i, arr) => {
      if (i == number - 1) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
  };

  const handleClick = (number: number, name: name) => {
    return () => {
      switch (name) {
        case "attack": {
          const result = setStateValue(attack, number);
          setValueForm(name, result);
          setAttack(result);
          break;
        }
        case "health": {
          const result = setStateValue(health, number);
          setValueForm(name, result);
          setHealth(result);
          break;
        }
        case "mana": {
          const result = setStateValue(mana, number);
          setValueForm(name, result);
          setMana(result);
          break;
        }
      }
    };
  };

  const { control, setValue } = useFormContext();
  return {
    mana,
    attack,
    health,
    control,
    handleClick,
  };
};

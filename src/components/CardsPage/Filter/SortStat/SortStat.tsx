import React from "react";
import { useSortStat } from "./useSortStat";
import { SortStatStyle } from "./style";
import { Controller } from "react-hook-form";

const SortStat = () => {
  const { mana, attack, health, control, handleClick } = useSortStat();
  return (
    <ContainerSC>
      <Controller
        name="attack"
        control={control}
        render={({ field, formState }) => {
          return (
            <WrapperSC>
              {attack.map((item, i, arr) => {
                return (
                  <ButtonSC
                    onClick={handleClick(item.value, "attack")}
                    key={item.value}
                    isActive={item.isActive}
                    color="#FFA200"
                    type="button"
                    bg="/img/image/cards-page/filter/attack.png">
                    <AttackSC>{item.value}</AttackSC>
                  </ButtonSC>
                );
              })}
            </WrapperSC>
          );
        }}
      />

      <WrapperSC>
        {health.map((item, i, arr) => {
          return (
            <ButtonSC
              onClick={handleClick(item.value, "health")}
              key={item.value}
              isActive={item.isActive}
              color="#FC000D"
              type="button"
              bg="/img/image/cards-page/filter/health.png">
              <HealthSC>{item.value}</HealthSC>
            </ButtonSC>
          );
        })}
      </WrapperSC>
      <WrapperSC>
        {mana.map((item, i, arr) => {
          return (
            <ButtonSC
              onClick={handleClick(item.value, "mana")}
              key={item.value}
              isActive={item.isActive}
              color="#64A8D1"
              type="button"
              bg="/img/image/cards-page/filter/mana.png">
              <ManaSC>{item.value}</ManaSC>
            </ButtonSC>
          );
        })}
      </WrapperSC>
    </ContainerSC>
  );
};

const { ManaSC, HealthSC, AttackSC, ButtonSC, WrapperSC, ContainerSC } =
  SortStatStyle();

export default React.memo(SortStat);

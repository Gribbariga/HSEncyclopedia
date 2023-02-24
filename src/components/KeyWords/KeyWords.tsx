import Link from "next/link";
import React from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import { useKeyWordsStyle } from "./style";
import { useKeyWords } from "./useKeyWords";

const KeyWords = () => {
  const { keyWords } = useKeyWords();
  return (
    <ContainerSC>
      <KeyWordsListSC>
        {keyWords?.map((item) => {
          return (
            <Link href={`/cards/standart?seach=${item.name}`}>
              <KeyWordsWrapperSC>
                <KeyWordsTitleSC>{item.name}</KeyWordsTitleSC>
                <KeyWordsTextSC>{item.text}</KeyWordsTextSC>
              </KeyWordsWrapperSC>
            </Link>
          );
        })}
      </KeyWordsListSC>
    </ContainerSC>
  );
};

const { KeyWordsListSC, KeyWordsTextSC, KeyWordsTitleSC, KeyWordsWrapperSC } =
  useKeyWordsStyle();

export default React.memo(KeyWords);

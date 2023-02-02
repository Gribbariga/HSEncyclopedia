import React, { FC } from "react";
import { useKeyWordsStyle } from "./style";
import { useKeyWords } from "./useKeyWords";

interface IKeyWordsProps {
  keyWordsIds: number[];
}

const KeyWords: FC<IKeyWordsProps> = ({ keyWordsIds }) => {
  const { keyItem } = useKeyWords(keyWordsIds);

  return (
    <>
      <KeyWordsWrapperSC>
        <KeyWordsTitleSC>Подробнее:</KeyWordsTitleSC>
        <KeyWordsListSC>
          {keyItem.map((item) => (
            <KeyWordsItemSC>
              {item?.name}
              <FullViewWrapperSC>
                <FullViewTitleSC>{item?.name}</FullViewTitleSC>
                <FullViewTextSC>{item?.refText}</FullViewTextSC>
              </FullViewWrapperSC>
            </KeyWordsItemSC>
          ))}
        </KeyWordsListSC>
      </KeyWordsWrapperSC>
    </>
  );
};

const {
  KeyWordsItemSC,
  KeyWordsListSC,
  FullViewTextSC,
  KeyWordsTitleSC,
  FullViewTitleSC,
  KeyWordsWrapperSC,
  FullViewWrapperSC,
} = useKeyWordsStyle();

export default KeyWords;

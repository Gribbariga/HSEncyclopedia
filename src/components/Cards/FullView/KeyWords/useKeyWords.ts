import { useAppSelector } from "@/hooks/state";

export const useKeyWords = (keyWordsIds: number[]) => {
  const keyWords = useAppSelector((state) => state.Meta.allMeta?.keywords);

  const keyItem = keyWordsIds.map((id) => {
    return keyWords?.find((word) => word.id == id);
  });

  return { keyItem };
};

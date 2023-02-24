import { useAppSelector } from "@/hooks/state";

export const useKeyWords = () => {
  const keyWords = useAppSelector((state) => state.Meta.allMeta?.keywords);

  return {
    keyWords,
  };
};

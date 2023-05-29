import { useState, useEffect } from "react";

export const useSelect = (onChange: (value: string) => void) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const closeSelect = () => {
      setOpen(false);
    };
    document.addEventListener("scroll", closeSelect);

    return () => {
      document.removeEventListener("scroll", closeSelect);
    };
  }, []);

  const handleClickSelect = () => {
    setOpen((prev) => !prev);
  };
  const handleSelect = (
    name: string,
    value: string,
    callback?: (...args: any[]) => void,
  ) => {
    return () => {
      if (callback) {
        callback(value);
      }
      onChange(value);
    };
  };

  return { isOpen, handleSelect, handleClickSelect };
};

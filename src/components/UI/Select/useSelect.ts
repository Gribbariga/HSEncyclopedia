import { useState, useEffect } from "react";

export const useSelect = () => {
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

  return { isOpen, handleClickSelect };
};

export const useModal = (useActive: (state: boolean) => void) => {
  const handlerCloseModal = () => {
    useActive(false);
  };

  return {
    handlerCloseModal,
  };
};

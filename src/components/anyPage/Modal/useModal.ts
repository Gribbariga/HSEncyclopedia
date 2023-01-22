export const useModal = (useActive: () => void) => {
  const handlerCloseModal = () => {
    useActive();
  };

  return {
    handlerCloseModal,
  };
};

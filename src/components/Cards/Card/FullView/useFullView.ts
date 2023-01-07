export const useFullView = (rare: number) => {
  const cardRare = [
    {
      id: 1,
      rare: "Обычная",
      production: "40 / 400",
      spraying: "5 / 50",
    },
    {
      id: 3,
      rare: "Редкая",
      production: "100 / 800",
      spraying: "20 / 100",
    },
    {
      id: 4,
      rare: "Эпическая",
      production: "400 / 1600",
      spraying: "100 / 400",
    },
    {
      id: 5,
      rare: "Легендарная",
      production: "1600 / 3200",
      spraying: "400 / 1600",
    },
  ];
  const cardIndo = cardRare.find((obj) => obj.id === rare);

  return { cardIndo };
};

export const initialPosition = [
  [10, 10],
  [12, 10],
];

export const getRandomCoordinates = () => {
  const x = Math.floor(Math.random() * (100 / 2)) * 2;
  const y = Math.floor(Math.random() * (100 / 2)) * 2;
  return { top: y, left: x };
};

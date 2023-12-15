export const getRandomColor = (opacity) => {
  return (
    "#" + Math.floor(Math.random() * 16777215).toString(16) + (opacity || "")
  );
};

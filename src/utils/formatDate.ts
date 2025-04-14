export const formatDate = (date: Date) => {
  return date.toLocaleDateString("uk-UA", {
    month: "short",
    day: "numeric",
  });
};

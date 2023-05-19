export const dateDifference = (date) => {
  const today = new Date();
  date = new Date(date.toDate().toDateString());
  return Math.floor((today - date) / (1000 * 60 * 60 * 24));
};

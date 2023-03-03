export const gigasecond = (daate) => {
  const gigasecond = 1000000000;
  const date = new Date(daate.getTime() + gigasecond * 1000);
  return date;
};

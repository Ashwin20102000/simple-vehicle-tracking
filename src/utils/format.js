export const dateFormatter = (date) => {
  return new Date(date).toDateString().split(" ").slice(1).join(" ")
}
export const formattedDate = (date: Date) => {
    const newFormattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    return newFormattedDate;
  };
  
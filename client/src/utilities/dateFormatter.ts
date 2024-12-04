export const dateFormatter = (date: string) => {
    const dateObject = new Date(date);
    dateObject.toLocaleDateString();
    const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)}-${dateObject.getDate()}`;
    return formattedDate;
}
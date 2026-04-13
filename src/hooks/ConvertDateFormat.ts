export function ConvertDateFormat(date: string) {
  const currentDate = new Date(date);
  let day: any = currentDate.getDate();
  day = day < 10 ? '0' + day : day;
  let month: any = currentDate.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  let year = currentDate.getFullYear();
  return day + '.' + month + '.' + year;
}

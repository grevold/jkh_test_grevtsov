import { DELETE_METER_URL, GET_Water_METERS_URL } from '../constants';

// Получить счетчики с query-параметрами (limit,offset)
export const fetchMeters = async (limit: number, offset: number) => {
  const response = await fetch(
    GET_Water_METERS_URL + `?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('Не удалось загрузить данные');
  }
  return response.json();
};

// Удалить счетчик по id
// export const fetchDeleteMeter = async (meterId: string) => {
//   const response = await fetch(DELETE_METER_URL + `${meterId}/`, {
//     method: "DELETE",
//   });
//   if (!response.ok) {
//     throw new Error("Не удалось удалить счетчик");
//   }
//   return response.json();
// };

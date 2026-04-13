import { GET_AREAS } from '../constants';

// Получить адрес по id
export const fetchAreas = async (id_meter: string) => {
  const response = await fetch(GET_AREAS + `?id=${id_meter}`);
  if (!response.ok) {
    throw new Error('Не удалось загрузить данные');
  }
  return response.json();
};

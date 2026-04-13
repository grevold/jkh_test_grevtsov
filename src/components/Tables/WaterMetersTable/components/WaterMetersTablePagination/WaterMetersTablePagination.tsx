import { useEffect, useMemo, useState } from 'react';
import s from './WaterMetersTablePagination.module.css';

interface Props {
  count: number;
  limit: number;
  offset: number;
  onChangeOffset: (newOffset: number) => void;
}

export function WaterMetersTablePagination({
  count,
  limit,
  offset,
  onChangeOffset,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const buttonsPerPage = 6;
  const totalPages = Math.floor(count / limit);
  const [rangePages, setRangePages] = useState([]);
  useEffect(() => {
    const result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    //@ts-ignore
    setRangePages(result);
  }, [totalPages]);

  // Функция для изменения текущей страницы
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  // Вычисляем, какие кнопки отображать
  const getVisibleButtons = () => {
    const startIndex = Math.max(currentPage - 3, 0);
    const endIndex = Math.min(startIndex + buttonsPerPage, totalPages);
    return Array.from(
      { length: endIndex - startIndex },
      (_, i) => startIndex + i + 1
    );
  };

  const visibleButtons = getVisibleButtons();

  return (
    <div className={s.root}>
      <div className={s.container_navigation}>
        <button
          className={s.button_control}
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          ←
        </button>
        <ul className={s.container_navigation}>
          {visibleButtons.map((button) => (
            <li
              className={s.pagination_button}
              onClick={() => onChangeOffset(button)}
            >
              {button}
            </li>
          ))}
        </ul>
        <div className={s.last_button_container}>
          <div className={s.ellipsis_container}>...</div>
          <li
            className={s.pagination_button}
            onClick={() => onChangeOffset(totalPages)}
          >
            {totalPages}
          </li>
        </div>
        <button
          className={s.button_control}
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
}

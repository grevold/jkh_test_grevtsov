import { useMemo, useState } from "react";
import s from "./WaterMetersTablePagination.module.css";

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
  const totalPages = Math.floor(count / limit);

  const [currentPage, setCurrentPage] = useState(1);
  const maxButtons = 6;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const getPaginationRange = () => {
    const range = [];
    let startPage;
    let endPage;

    if (totalPages <= maxButtons) {
      // Если страниц меньше или равно максимальному количеству кнопок
      startPage = 1;
      endPage = totalPages;
    } else {
      // Если страниц больше максимального количества кнопок
      const half = Math.floor(maxButtons / 2);

      if (currentPage <= half) {
        startPage = 1;
        endPage = maxButtons;
      } else if (currentPage + half >= totalPages) {
        startPage = totalPages - maxButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - half;
        endPage = currentPage + half;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  const handleClick = (page:number) => {
    handlePageChange(page);
    onChangeOffset(currentPage);
  };

  return (
    <div className={s.root}>
      <ul className={s.container_navigation}>
        {paginationRange.map((page) => (
          <li
            key={page}
            className={
              currentPage === page
                ? s.pagination_button_active
                : s.pagination_button
            }
            onClick={() => handleClick(page)}
          >
            {page}
          </li>
        ))}
        {paginationRange[0] > 1 && <li className={s.ellipsis_container}>...</li>}
        {paginationRange[paginationRange.length - 1] < totalPages && (
          <li
            className={s.pagination_button}
            onClick={() => handleClick(totalPages)}
          >
            {totalPages}
          </li>
        )}
      </ul>
    </div>
  );
}

{
  /* <div className={s.root}>
      <ul className={s.container_navigation}>
        {paginationButtons.map((button, index) => (
          <li
            key={`button_${button}`}
            className={s.pagination_button}
            onClick={() => onChangeOffset(button)}
          >
            {button}
          </li>
        ))}
      </ul>
    </div> */
}

// const paginationButtons = useMemo(() => {
//     const result = [];
//     for (let i = 1; i <= Math.floor(count / limit); i++) {
//       result.push(i);
//     }
//     return result;
//   }, [count]);

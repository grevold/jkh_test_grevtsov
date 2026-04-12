import { useMemo } from "react";
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
  const paginationButtons = useMemo(() => {
    const result = [];
    for (let i = 1; i <= Math.floor(count / limit); i++) {
      result.push(i);
    }
    return result;
  }, [count]);
  return (
    <div className={s.root}>
      <ul className={s.container_navigation}>
        <li
          key={`button_${1}`}
          className={s.pagination_button}
          onClick={() => onChangeOffset(0)}
        >
          1
        </li>
        <li
          key={`button_${2}`}
          className={s.pagination_button}
          onClick={() => onChangeOffset(1)}
        >
          2
        </li>
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

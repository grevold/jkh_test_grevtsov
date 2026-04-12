import s from "./WaterMetersTablePagination.module.css";

interface Props {
  limit: number;
  offset: number;
}

export function WaterMetersTablePagination({ limit, offset }: Props) {
  return (
    <div className={s.root}>
      <ul className={s.container_navigation}>
        <li className={s.pagination_button}>1</li>
        <li className={s.pagination_button}>1</li>
        <li className={s.pagination_button}>1</li>
        <li className={s.pagination_button}>1</li>
        <li className={s.pagination_button}>1</li>
      </ul>
    </div>
  );
}

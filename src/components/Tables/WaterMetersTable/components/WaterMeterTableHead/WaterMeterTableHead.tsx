import s from "./WaterMeterTableHead.module.css";

export function WaterMeterTableHead() {
  return (
    <div className={s.root}>
      <div className={s.number_cell}>№</div>
      <div className={s.type_cell}>Тип</div>
      <div className={s.date_cell}>Дата установки</div>
      <div className={s.is_automatic_cell}>Автоматический</div>
      <div className={s.value_cell}>Текущие показания</div>
      <div className={s.area_cell}>Адрес</div>
      <div className={s.description_cell}>Примечание</div>
    </div>
  );
}

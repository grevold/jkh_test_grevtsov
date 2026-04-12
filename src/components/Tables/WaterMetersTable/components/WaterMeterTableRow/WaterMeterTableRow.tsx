import { ColdWaterIcon } from "../../../../../assets/icons/ColdWaterIcon";
import { HotWaterIcon } from "../../../../../assets/icons/HotWaterIcon";
import { ConvertDateFormat } from "../../../../../hooks/ConvertDateFormat";
import { Type_Of_Water_Area_Meter } from "../../../../../types";
import s from "./WaterMeterTableRow.module.css";

interface Props {
  number: number;
  id: string;
  type: string[];
  isAutomatic: boolean | null;
  date: string;
  initialValues: number[];
  area: string;
  description: string;
}

export function WaterMeterTableRow({
  number,
  id,
  type,
  isAutomatic,
  date,
  initialValues,
  area,
  description,
}: Props) {
  return (
    <li key={id} className={s.root}>
      <div className={s.number_cell}>{number + 1}</div>
      <div className={s.type_cell}>
        {type[0] === "ColdWaterAreaMeter" ? (
          <div>
            <ColdWaterIcon />{" "}
            <span>{Type_Of_Water_Area_Meter.ColdWaterAreaMeter}</span>
          </div>
        ) : (
          <div>
            <HotWaterIcon/>{" "}
            <span>{Type_Of_Water_Area_Meter.HotWaterAreaMeter}</span>
          </div>
        )}
      </div>
      <div className={s.date_cell}>{ConvertDateFormat(date)}</div>
      <div className={s.is_automatic_cell}>
        {isAutomatic === null ? "Да" : "Нет"}
      </div>
      <div className={s.value_cell}>{initialValues[0].toFixed(4)}</div>
      <div className={s.area_cell}>{area}</div>
      <div className={s.description_cell}>{description}</div>
    </li>
  );
}

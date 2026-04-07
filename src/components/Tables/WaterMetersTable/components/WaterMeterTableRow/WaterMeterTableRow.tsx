import { Type_Of_Water_Area_Meter } from "../../../../../types";

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
  description
}: Props) {
  return (
    <li key={id}>
      {number + 1}
      {type[0] === "ColdWaterAreaMeter"
        ? Type_Of_Water_Area_Meter.ColdWaterAreaMeter
        : Type_Of_Water_Area_Meter.HotWaterAreaMeter}
      {date}
      {initialValues[0]}
      {area}
      {description}
    </li>
  );
}

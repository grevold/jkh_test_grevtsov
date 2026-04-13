import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import meterStore from "../../../store";
import { GET_Water_METERS_URL } from "../../../constants";
import { WaterMeterTableRow } from "./components/WaterMeterTableRow/WaterMeterTableRow";
import s from "./WaterMeterTable.module.css";
import { WaterMeterTableHead } from "./components/WaterMeterTableHead/WaterMeterTableHead";
import { WaterMetersTablePagination } from "./components/WaterMetersTablePagination/WaterMetersTablePagination";
import { Type_Water_Meter } from "../../../types";
import { getSnapshot } from "mobx-state-tree";
import { Preloader } from "../../../assets/preloader/Preloader";

interface Props {
  meters: any;
  limit: number;
  offset: number;
  count: number;
  onChangeOffset: (newOffset: number) => void;
  isLoad: boolean;
}

const WaterMeterTable = ({
  meters,
  limit,
  offset,
  count,
  onChangeOffset,
  isLoad,
}: Props) => {
  //@ts-ignore
  return (
    <div className={s.root}>
      <h2 className={s.header}>Список счетчиков</h2>
      <div className={s.info_container}>
        <span> Всего счетчиков:{count}</span>
      </div>
      
      <WaterMeterTableHead />
      {isLoad ? (
        <ul className={s.table_body}>
          {meters.map(
            //@ts-ignore
            (meter, index) => (
              <WaterMeterTableRow
                id={meter.id}
                number={limit * offset + index}
                type={meter._type}
                date={meter.installation_date}
                isAutomatic={meter.is_automatic}
                initialValues={meter.initial_values}
                area={meter.area.id}
                description={meter.description}
              />
            ),
          )}
        </ul>
      ) : (
        <div className={s.preloader_container}>
          <Preloader />
        </div>
      )}

      <WaterMetersTablePagination
        count={count}
        limit={limit}
        offset={offset}
        onChangeOffset={onChangeOffset}
      />
    </div>
  );
};

export default WaterMeterTable;

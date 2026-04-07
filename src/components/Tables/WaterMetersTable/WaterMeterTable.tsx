import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import meterStore from "../../../store";
import { GET_Water_METERS_URL } from "../../../constants";
import { WaterMeterTableRow } from "./components/WaterMeterTableRow/WaterMeterTableRow";
import s from "./WaterMeterList.module.css";

const WaterMeterList = observer(() => {
  useEffect(() => {
    meterStore.getWaterMeters(GET_Water_METERS_URL + `?limit=20&offset=0`);
  }, []);

  return (
    <ul className={s.root}>
      {meterStore.waterMeters.map((meter, index) => (
        <WaterMeterTableRow
          id={meter.id}
          number={index}
          type={meter._type}
          date={meter.installation_date}
          isAutomatic={meter.is_automatic}
          initialValues={meter.initial_values}
          area={meter.area.id}
          description={meter.description}
        />
      ))}
    </ul>
  );
});

export default WaterMeterList;

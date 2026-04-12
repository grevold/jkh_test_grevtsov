import { useEffect, useState } from "react";
import WaterMeterTable from "../../components/Tables/WaterMetersTable/WaterMeterTable";
import s from "./MainPage.module.css";
import meterStore from "../../store";
import { GET_Water_METERS_URL } from "../../constants";
import { getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

export const MainPage = observer(() => {
  const [state, setState] = useState({
    limit: 20,
    offset: 0,
    count: 0,
    result: [],
  });
  useEffect(() => {
    meterStore
      .getWaterMeters(
        GET_Water_METERS_URL + `?limit=${state.limit}&offset=${state.offset}`,
      )
      .then(() =>
        //@ts-ignore
        setState((state) => ({
          ...state,
          //@ts-ignore
          count: meterStore.count,
          result: meterStore.waterMeters,
        })),
      )
  }, []);

  return (
    <div className={s.root}>
      <WaterMeterTable
        meters={state.result}
        limit={state.limit}
        offset={state.offset}
        count={state.count}
      />
    </div>
  );
});

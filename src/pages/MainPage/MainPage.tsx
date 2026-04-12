import { useEffect, useState } from "react";
import WaterMeterTable from "../../components/Tables/WaterMetersTable/WaterMeterTable";
import s from "./MainPage.module.css";
import meterStore from "../../store";
import { GET_Water_METERS_URL } from "../../constants";
import { observer } from "mobx-react-lite";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

export const MainPage = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    limit: 20,
    // текущее значение offset парсим из url (по умолчанию - 0)
    offset: Number(new URLSearchParams(location.search).get("offset")),
    count: 0,
    result: [],
    isLoad: false,
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
          isLoad: true,
        })),
      )
      // при обновлении state, записываем в url новые query-парметры 
      .then(() => {
        navigate(
          `?${createSearchParams({ limit: `${state.limit}`, offset: `${state.offset}` })}`,
        );
      });
  }, [state.offset]);

  const handleChangeOffset = (newOffset: number) => {
    setState((state) => ({ ...state, offset: newOffset, isLoad: false }));
  };

  return (
    <div className={s.root}>
      <WaterMeterTable
        meters={state.result}
        limit={state.limit}
        offset={state.offset}
        count={state.count}
        onChangeOffset={handleChangeOffset}
        isLoad={state.isLoad}
      />
    </div>
  );
});

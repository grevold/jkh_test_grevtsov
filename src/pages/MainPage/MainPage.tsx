import { useEffect, useState } from "react";
import WaterMeterTable from "../../components/Tables/WaterMetersTable/WaterMeterTable";
import s from "./MainPage.module.css";
import meterStore from "../../store";
import { observer } from "mobx-react-lite";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchMeters } from "../../api/meters";
import { fetchAreas } from "../../api/areas";

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

  // state id-шников адресов
  const [areasIds, setAreasIds] = useState<string[]>([]);

  // Запрос счетчиков
  const {
    isPending: isPendingWaterMeters,
    error: errorWaterMeters,
    data: dataWaterMeters,
  } = useQuery({
    queryKey: ["waterMeters", state.limit, state.offset],
    queryFn: () => fetchMeters(state.limit, state.offset),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (dataWaterMeters) {
      console.log(dataWaterMeters);
      meterStore.setWaterMeters(dataWaterMeters.results);
      //@ts-ignore
      meterStore.setCount(dataWaterMeters.count);
    }
  }, [dataWaterMeters, isPendingWaterMeters]);

  useEffect(() => {
    if (dataWaterMeters) {
      //@ts-ignore
      setState((state) => ({
        ...state,
        count: meterStore.count,
        result: meterStore.waterMeters,
        isLoad: true,
      }));
    }
  }, [dataWaterMeters]);

  // формируем массив id-шников адресов
  useEffect(() => {
    if (state.result.length !== 0) {
      //@ts-ignore
      setAreasIds(state.result.map((meter) => meter.area.id));
    }
  }, [state.result]);

  const handleChangeOffset = (newOffset: number) => {
    setState((state) => ({ ...state, offset: newOffset, isLoad: false }));
  };

  // записываем query-параметры в url
  useEffect(() => {
    navigate(
      `?${createSearchParams({ limit: `${state.limit}`, offset: `${state.offset}` })}`,
    );
  }, [state.result,state.offset]);

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

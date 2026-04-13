import { types, flow } from "mobx-state-tree";
import WaterMeterModel from "./models/WaterMeterModel";
import { Type_Water_Meter } from "./types";
import AreaModel from "./models/AreaModel";

// Определяем store
const WaterMeterStore = types
  .model("WaterMeterStore", {
    waterMeters: types.array(WaterMeterModel),
    areas: types.array(AreaModel),
    count: types.number,
  })
  .actions((self) => ({
    setWaterMeters(meters: any) {
      self.waterMeters = meters;
    },
    setAreas(areas: any) {
      self.areas = areas;
    },
    setCount(count: number) {
      self.count = count;
    },
  }));

// Создаем экземпляр store
const meterStore = WaterMeterStore.create({
  waterMeters: [],
  areas: [],
  count: 0,
});

// Экспортируем store для использования в приложении
export default meterStore;

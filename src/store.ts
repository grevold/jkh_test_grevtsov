import { types, flow, cast } from "mobx-state-tree";
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
      self.waterMeters = cast(meters);
      console.log(self.waterMeters);
    },
    setAreas(areas: any) {
      self.areas = areas;
    },
    setCount(count: number) {
      self.count = count;
    },
    deleteMeter(meterId: string) {
      const index = self.waterMeters.findIndex((meter) => meter.id === meterId);
      if (index !== -1) {
        self.waterMeters.splice(index, 1);
      }
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

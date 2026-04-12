import { types, flow, getSnapshot } from "mobx-state-tree";
import WaterMeterModel from "./models/WaterMeterModel";
import { Type_Water_Meter } from "./types";
import { GET_Water_METERS_URL } from "./constants";

// Определяем store
const WaterMeterStore = types
  .model("WaterMeterStore", {
    waterMeters: types.array(WaterMeterModel),
    count: types.number,
  })
  .actions((self) => ({
    // Асинхронное действие для загрузки данных
    getWaterMeters: flow(function* (url) {
      try {
        const response = yield fetch(url);
        const data = yield response.json();

        self.waterMeters = data.results.map((item: Type_Water_Meter) =>
          WaterMeterModel.create(item),
        );
        self.count = data.count;
      } catch (error) {
        console.error("Не удалось загрузить счетчики воды", error);
      }
    }),
  }));

// Создаем экземпляр store
const meterStore = WaterMeterStore.create({
  waterMeters: [],
  count: 0,
});

// Экспортируем store для использования в приложении
export default meterStore;

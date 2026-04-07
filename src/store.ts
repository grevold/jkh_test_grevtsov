import { types, flow } from "mobx-state-tree";
import WaterMeterModel from "./models/WaterMeterModel";
import { Type_Water_Meter } from "./types";
import { GET_Water_METERS_URL } from "./constants";

// Определяем store
const WaterMeterStore = types
  .model("WaterMeterStore", {
    waterMeters: types.array(WaterMeterModel),
  })
  .actions((self) => ({
    // Асинхронное действие для загрузки данных
    getWaterMeters: flow(function* (GET_Water_METERS_URL) {
      try {
        const response = yield fetch(GET_Water_METERS_URL);
        const data = yield response.json();
        console.log(data)
        self.waterMeters = data.results.map((item: Type_Water_Meter) =>
          WaterMeterModel.create(item),
        );
      } catch (error) {
        console.error("Не удалось загрузить счетчики воды", error);
      }
    }),
  }));

// Создаем экземпляр store
const meterStore = WaterMeterStore.create({
  waterMeters: [],
});

// Экспортируем store для использования в приложении
export default meterStore;

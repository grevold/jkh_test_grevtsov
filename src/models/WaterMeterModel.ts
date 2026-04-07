import { types } from "mobx-state-tree";

// Определяем модель
const WaterMeterModel = types.model("WaterMeterModel", {
  id: types.string,
  _type: types.array(types.string),
  area: types.model({
    id: types.string,
  }),
  is_automatic: types.maybeNull(types.boolean),
  communication: types.string,
  description: types.string,
  serial_number: types.string,
  installation_date: types.string,
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.array(types.number),
});

export default WaterMeterModel;

import { types } from "mobx-state-tree";

// Определяем модель
const AreaModel = types.model("AreaModel", {
  id: types.string,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: types.model({
    address: types.string,
    id: types.string,
    fias_addrobjs: types.array(types.string),
  }),
});

export default AreaModel;

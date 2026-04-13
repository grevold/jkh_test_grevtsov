export interface Type_Water_Meter {
  id: string;
  _type: string[];
  area: { id: string };
  is_automatic: null;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: string;
  brand_name: null;
  model_name: null;
  initial_values: number[];
}

export enum Type_Of_Water_Area_Meter {
  'ColdWaterAreaMeter' = 'ХВС',
  'HotWaterAreaMeter' = 'ГВС',
}

export interface Area {
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
  house: {
    address: string;
    id: string;
    fias_addrobjs: string[];
  };
}

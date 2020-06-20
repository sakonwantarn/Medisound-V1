import { Medicine, SAVE_MEDICINE, MedicineActionTypes } from "./types"; 


export function saveMedicine(medicine: Medicine): MedicineActionTypes {
  return {
    type: SAVE_MEDICINE,
    payload: medicine,
  };
}


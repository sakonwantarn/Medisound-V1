import { MedicineState, SAVE_MEDICINE, MedicineActionTypes } from "./types";

const initialState: MedicineState = {
  medicine: [],
};

export function medicineReducer(
  state: MedicineState = initialState,
  action: MedicineActionTypes
): MedicineState {
  switch (action.type) {
    case SAVE_MEDICINE: 
      console.log(action.payload)
      return {
        medicine: [...state.medicine, action.payload],
      };
    default:
      return state;
  }
}

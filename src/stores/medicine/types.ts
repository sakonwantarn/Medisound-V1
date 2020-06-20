export interface Medicine {
  id: string;
  name: string;
  detail: string;
  shape: string;
  color: string;
  time: string;
  specificTime: string;
  categoryTime: string;
}

export interface MedicineState {
  medicine: Medicine[];
}

export const SAVE_MEDICINE = "medicine/SAVE_MEDICINE";
export const UPDATE_MEDICINE = "medicine/UPDATE_MEDICINE";

interface SaveMedicineAction {
  type: typeof SAVE_MEDICINE;
  payload: Medicine;
}

interface UpdateMedicineAction {
  type: typeof UPDATE_MEDICINE;
  meta: {
    id: number;
  };
}

export type MedicineActionTypes = SaveMedicineAction | UpdateMedicineAction;

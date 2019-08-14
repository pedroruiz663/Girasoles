
export const CREATE_STUDENT = 'KinderGarden/CREATE_STUDENT';
export const UPDATE_STUDENT = 'KinderGarden/UPDATE_STUDENT';
export const EDIT_STUDENT = 'KinderGarden/EDIT_STUDENT';
export const DELETE_STUDENT = 'KinderGarden/DELETE_STUDENT';
export const SELECT_STUDENT = 'KinderGarden/SELECT_STUDENT';


export const createSTUDENTAction = (STUDENT) => ({ type: CREATE_STUDENT, payload: STUDENT });
export const editSTUDENTAction = (STUDENT) => ({ type: EDIT_STUDENT, payload: STUDENT });
export const updateSTUDENTAction = (STUDENT, index) => ({ type: UPDATE_STUDENT, payload: { STUDENT, index } });
export const deleteSTUDENTAction = (index) => ({ type: DELETE_STUDENT, payload: index });
export const selectSTUDENTAction = (STUDENT) => ({ type: SELECT_STUDENT, payload: STUDENT });

export default {
  createSTUDENTAction,
  updateSTUDENTAction,
  editSTUDENTAction,
  deleteSTUDENTAction,
  selectSTUDENTAction,
};
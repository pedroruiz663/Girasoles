
import { CREATE_STUDENT, UPDATE_STUDENT, EDIT_STUDENT, DELETE_STUDENT, SELECT_STUDENT } from '../actions';

export const INITIAL_STATE = {
  isEdit: false,
  Students: [],
  selectedStudent: null,
};

const KinderGardenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      return {
        ...state,
        Students: state.Students.concat(action.payload),
      };

    case UPDATE_STUDENT:
      const newStudents = [ ...state.Students ];
      newStudents[action.payload.index] = action.payload.student;
      
      return {
        ...state,
        Students: newStdents,
      };

    case EDIT_STUDENT:
      return {
        ...state,
        isEdit: true,
        selectedStudent: action.payload,
      };

    case DELETE_STUDENT:
      const newDeleteStudents = [ ...state.Students ];
      newDeleteStudents.splice(action.payload, 1);

      return {
        ...state,
        Students: newDeleteStudents,
      };

    case SELECT_STUDENT:
      return {
        ...state,
        selectedStudent: action.payload,
      };

    default:
      return state;
  }
};

export default KinderGardenReducer;

import React from 'react';
import { connect } from 'react-redux';
import StudentsData from '../StudentsData';
import { selectPetAction, editPetAction } from '../../store/actions';


const StudentsDataContainer = (props) => (
  <StudentsData {...props} />
);

const mapStateToProps = ({ selectedStudent }) => ({ pet: selectedStudent });
const mapDispatchToProps = {
  editStudentAction,
  selectStudentAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsDataContainer);
    
import React from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList.component';
import { selectSTUDENTAction } from '../../Store/Actions';

const CourseListContainer = (props) => (
  <CourseList {...props} />
);

const mapStateToProps = ({ pets }) => ({ pets });
const mapDispatchToProps = {
  selectPetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer);
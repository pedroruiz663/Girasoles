
import React from 'react';
import { connect } from 'react-redux';
import KinderGarden from '../KinderGarden/KinderGarden.component';
import { createCourseAction } from '../../Store/Actions';

const KinderGardenContainer = (props) => (
  <KinderGarden {...props} />
);

const mapStateToProps = (state) => (state);
const mapDispatchToProps = {
  createCourseAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(KinderGardenContainer);
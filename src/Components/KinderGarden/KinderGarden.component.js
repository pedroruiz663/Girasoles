
import React from 'react';
import StudentForm from '../StudetsForm/StudentsForm';

import './KinderGarden.css';

const KinderGarden = ({ isEdit, selectedCourse, courses, createCourseAction }) => {
  const onCourseSubmit = (course) => {
    createCourseAction(course);
  };

  const onCourseDelete = () => {};
  const onEditCancel = () => {};

  return (
    <div className="KinderGarden">
      <div>
        <StudentsForm
          isEdit={isEdit}
          course={selectedCourse}
          onCreate={onCourseSubmit}
          onDelete={onCourseDelete}
          onEditCancel={onEditCancel}
        />
      </div>
    </div>
  );
};

export default KinderGarden;
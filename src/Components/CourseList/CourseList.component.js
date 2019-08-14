
import React, { useState } from 'react';

import './CourseList.css';

const CourseList = ({ history, courses, selectCoursesAction }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onSelectCourse = (course) => () => {
    selectCoursesAction(course);
    history.push('/students-data');
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const className = `CourseList CourseList--${isOpen ? 'open' : 'closed'}`;
  return (
    <div className={className}>
      <ul>
        {courses.map((pet, i) => (
          <li className="CourseList__Item" key={i} onClick={onSelectCourse(course)}>
            Sala: {course.name}
          </li>
        ))}
      </ul>

      <button onClick={toggleList}>{isOpen ? 'Mostrar menos' : 'Mostrar más'}</button>
    </div>
  );  
};

export default CourseList;